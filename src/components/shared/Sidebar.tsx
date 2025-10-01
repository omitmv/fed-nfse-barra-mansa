import React, { useState } from 'react';
import styled from 'styled-components';
import { Link, useLocation } from 'react-router-dom';

interface SidebarProps {
  isOpen: boolean;
  onToggle: () => void;
}

interface SubMenuItem {
  label: string;
  path: string;
  icon?: string;
}

interface MenuItem {
  label: string;
  path?: string;
  icon: string;
  subItems?: SubMenuItem[];
}

const SidebarContainer = styled.div<{ $isOpen: boolean }>`
  position: fixed;
  left: 0;
  top: 0;
  height: 100vh;
  width: ${({ $isOpen }) => ($isOpen ? '280px' : '60px')};
  background: linear-gradient(180deg, #4c1d95 0%, #5b21b6 50%, #6d28d9 100%);
  transition: width 0.3s ease;
  z-index: 1000;
  overflow: hidden;
`;

const SidebarHeader = styled.div`
  height: 60px;
  display: flex;
  align-items: center;
  padding: 0 ${({ theme }) => theme.spacing.md};
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
`;

const MenuToggle = styled.button`
  background: none;
  border: none;
  color: white;
  font-size: 20px;
  cursor: pointer;
  padding: ${({ theme }) => theme.spacing.sm};
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: ${({ theme }) => theme.borderRadius.md};
  transition: background-color ${({ theme }) => theme.transitions.fast};

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
`;

const MenuList = styled.ul`
  list-style: none;
  padding: ${({ theme }) => theme.spacing.md} 0;
  margin: 0;
`;

const MenuItemContainer = styled.li<{ $hasSubItems?: boolean }>`
  margin-bottom: ${({ theme }) => theme.spacing.xs};
`;

const MenuLink = styled(Link)<{ $isActive: boolean; $isOpen: boolean }>`
  display: flex;
  align-items: center;
  padding: ${({ theme }) => theme.spacing.md};
  color: rgba(255, 255, 255, 0.9);
  text-decoration: none;
  transition: all ${({ theme }) => theme.transitions.fast};
  position: relative;
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  border-radius: 0 25px 25px 0;
  margin-right: ${({ theme }) => theme.spacing.md};

  ${({ $isActive }) =>
    $isActive &&
    `
    background-color: rgba(255, 255, 255, 0.1);
    border-right: 3px solid #10b981;
  `}

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
    color: white;
    text-decoration: none;
  }
`;

const MenuButton = styled.button<{ $isActive: boolean; $isOpen: boolean }>`
  display: flex;
  align-items: center;
  width: 100%;
  padding: ${({ theme }) => theme.spacing.md};
  background: none;
  border: none;
  color: rgba(255, 255, 255, 0.9);
  text-decoration: none;
  transition: all ${({ theme }) => theme.transitions.fast};
  position: relative;
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  border-radius: 0 25px 25px 0;
  margin-right: ${({ theme }) => theme.spacing.md};
  cursor: pointer;

  ${({ $isActive }) =>
    $isActive &&
    `
    background-color: rgba(255, 255, 255, 0.1);
    border-right: 3px solid #10b981;
  `}

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
    color: white;
  }
`;

const MenuIcon = styled.span`
  font-size: 18px;
  margin-right: ${({ theme }) => theme.spacing.md};
  min-width: 20px;
  text-align: center;
`;

const MenuText = styled.span<{ $isOpen: boolean }>`
  opacity: ${({ $isOpen }) => ($isOpen ? 1 : 0)};
  transition: opacity ${({ theme }) => theme.transitions.fast};
  white-space: nowrap;
`;

const SubMenuList = styled.ul<{ $isOpen: boolean; $isExpanded: boolean }>`
  list-style: none;
  padding: 0;
  margin: 0;
  max-height: ${({ $isExpanded, $isOpen }) =>
    $isExpanded && $isOpen ? '200px' : '0'};
  overflow: hidden;
  transition: max-height ${({ theme }) => theme.transitions.normal};
  background-color: rgba(0, 0, 0, 0.2);
  margin-right: ${({ theme }) => theme.spacing.md};
  border-radius: 0 15px 15px 0;
`;

const SubMenuItemContainer = styled.li``;

const SubMenuLink = styled(Link)<{ $isActive: boolean }>`
  display: flex;
  align-items: center;
  padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.xl};
  color: rgba(255, 255, 255, 0.8);
  text-decoration: none;
  font-size: ${({ theme }) => theme.typography.fontSize.xs};
  transition: all ${({ theme }) => theme.transitions.fast};

  ${({ $isActive }) =>
    $isActive &&
    `
    background-color: rgba(255, 255, 255, 0.1);
    color: white;
  `}

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
    color: white;
    text-decoration: none;
  }
`;

const ExpandIcon = styled.span<{ $isExpanded: boolean }>`
  margin-left: auto;
  font-size: 12px;
  transition: transform ${({ theme }) => theme.transitions.fast};
  transform: ${({ $isExpanded }) =>
    $isExpanded ? 'rotate(180deg)' : 'rotate(0deg)'};
`;

const UserSection = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: ${({ theme }) => theme.spacing.md};
  border-top: 1px solid rgba(255, 255, 255, 0.1);
`;

const UserButton = styled.button<{ $isOpen: boolean }>`
  display: flex;
  align-items: center;
  width: 100%;
  padding: ${({ theme }) => theme.spacing.sm};
  background: rgba(255, 255, 255, 0.1);
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius.full};
  color: white;
  cursor: pointer;
  transition: background-color ${({ theme }) => theme.transitions.fast};

  &:hover {
    background-color: rgba(255, 255, 255, 0.2);
  }
`;

const UserAvatar = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.primary.main};
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: bold;
  margin-right: ${({ theme }) => theme.spacing.sm};
`;

const menuItems: MenuItem[] = [
  {
    label: 'Dashboard',
    path: '/dashboard',
    icon: '📊',
  },
  {
    label: 'Configuração',
    icon: '⚙️',
    subItems: [
      { label: 'Usuário', path: '/config/user', icon: '👤' },
      { label: 'Sistema', path: '/config/system', icon: '🔧' },
      { label: 'Segurança', path: '/config/security', icon: '🔒' },
    ],
  },
  {
    label: 'Configurações Avançadas',
    icon: '🔧',
    subItems: [
      { label: 'Phone Configuration', path: '/advanced/phone', icon: '📱' },
      { label: 'Tracking', path: '/advanced/tracking', icon: '📍' },
      { label: 'Automation', path: '/advanced/automation', icon: '🤖' },
    ],
  },
  {
    label: 'Relatórios',
    path: '/reports',
    icon: '📄',
  },
  {
    label: 'Ajuda',
    path: '/help',
    icon: '❓',
  },
];

export const Sidebar: React.FC<SidebarProps> = ({ isOpen, onToggle }) => {
  const location = useLocation();
  const [expandedItems, setExpandedItems] = useState<string[]>([]);

  const toggleSubMenu = (itemLabel: string) => {
    setExpandedItems(prev =>
      prev.includes(itemLabel)
        ? prev.filter(item => item !== itemLabel)
        : [...prev, itemLabel]
    );
  };

  const isItemActive = (item: MenuItem): boolean => {
    if (item.path) {
      return location.pathname === item.path;
    }
    return (
      item.subItems?.some(subItem => location.pathname === subItem.path) ||
      false
    );
  };

  const isSubItemActive = (path: string) => location.pathname === path;

  return (
    <SidebarContainer $isOpen={isOpen}>
      <SidebarHeader>
        <MenuToggle onClick={onToggle}>☰</MenuToggle>
      </SidebarHeader>

      <MenuList>
        {menuItems.map(item => (
          <MenuItemContainer key={item.label} $hasSubItems={!!item.subItems}>
            {item.path ? (
              <MenuLink
                to={item.path}
                $isActive={isItemActive(item)}
                $isOpen={isOpen}
              >
                <MenuIcon>{item.icon}</MenuIcon>
                <MenuText $isOpen={isOpen}>{item.label}</MenuText>
              </MenuLink>
            ) : (
              <>
                <MenuButton
                  onClick={() => toggleSubMenu(item.label)}
                  $isActive={isItemActive(item)}
                  $isOpen={isOpen}
                >
                  <MenuIcon>{item.icon}</MenuIcon>
                  <MenuText $isOpen={isOpen}>{item.label}</MenuText>
                  {item.subItems && isOpen && (
                    <ExpandIcon
                      $isExpanded={expandedItems.includes(item.label)}
                    >
                      ▼
                    </ExpandIcon>
                  )}
                </MenuButton>
                {item.subItems && (
                  <SubMenuList
                    $isOpen={isOpen}
                    $isExpanded={expandedItems.includes(item.label)}
                  >
                    {item.subItems.map(subItem => (
                      <SubMenuItemContainer key={subItem.path}>
                        <SubMenuLink
                          to={subItem.path}
                          $isActive={isSubItemActive(subItem.path)}
                        >
                          {subItem.label}
                        </SubMenuLink>
                      </SubMenuItemContainer>
                    ))}
                  </SubMenuList>
                )}
              </>
            )}
          </MenuItemContainer>
        ))}
      </MenuList>

      <UserSection>
        <UserButton $isOpen={isOpen}>
          <UserAvatar>U</UserAvatar>
          {isOpen && <MenuText $isOpen={isOpen}>Usuário</MenuText>}
        </UserButton>
      </UserSection>
    </SidebarContainer>
  );
};

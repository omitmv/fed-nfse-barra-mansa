import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.header<{ $sidebarOpen: boolean }>`
  background-color: ${({ theme }) => theme.colors.background.default};
  border-bottom: 1px solid ${({ theme }) => theme.colors.border.main};
  padding: 0 ${({ theme }) => theme.spacing.lg};
  position: sticky;
  top: 0;
  z-index: 99;
  box-shadow: ${({ theme }) => theme.shadows.sm};
  margin-left: 0px;
  transition: margin-left 0.3s ease;
`;

const HeaderContent = styled.div`
  display: flex;
  align-items: center;
  height: 64px;
`;

const SystemTitle = styled.h1`
  font-size: ${({ theme }) => theme.typography.fontSize['2xl']};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  color: ${({ theme }) => theme.colors.primary.main};
  margin: 0;
`;

interface HeaderProps {
  className?: string;
  sidebarOpen: boolean;
}

export const Header: React.FC<HeaderProps> = ({ className, sidebarOpen }) => {
  return (
    <HeaderContainer className={className} $sidebarOpen={sidebarOpen}>
      <HeaderContent>
        <SystemTitle>NFS-e Barra Mansa</SystemTitle>
      </HeaderContent>
    </HeaderContainer>
  );
};

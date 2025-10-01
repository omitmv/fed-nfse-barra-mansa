import React, { useState } from 'react';
import styled from 'styled-components';
import { Header } from './Header';
import { Footer } from './Footer';
import { Sidebar } from './Sidebar';

const LayoutContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const MainWrapper = styled.div<{ $sidebarOpen: boolean }>`
  display: flex;
  flex-direction: column;
  flex: 1;
  margin-left: ${({ $sidebarOpen }) => ($sidebarOpen ? '280px' : '60px')};
  transition: margin-left 0.3s ease;
`;

const MainContent = styled.main`
  flex: 1;
  width: 100%;
  padding: ${({ theme }) => theme.spacing.xl} ${({ theme }) => theme.spacing.lg};

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: ${({ theme }) => theme.spacing.lg}
      ${({ theme }) => theme.spacing.md};
  }
`;

interface LayoutProps {
  children: React.ReactNode;
  className?: string;
}

export const Layout: React.FC<LayoutProps> = ({ children, className }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <LayoutContainer className={className}>
      <Sidebar isOpen={sidebarOpen} onToggle={toggleSidebar} />
      <MainWrapper $sidebarOpen={sidebarOpen}>
        <Header sidebarOpen={sidebarOpen} />
        <MainContent>{children}</MainContent>
        <Footer />
      </MainWrapper>
    </LayoutContainer>
  );
};

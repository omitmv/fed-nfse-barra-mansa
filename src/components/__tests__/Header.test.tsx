import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../styles';
import { Header } from '../shared/Header';

const renderWithProviders = (component: React.ReactElement) => {
  return render(
    <BrowserRouter>
      <ThemeProvider theme={theme}>{component}</ThemeProvider>
    </BrowserRouter>
  );
};

describe('Header Component', () => {
  it('renders the logo/title', () => {
    renderWithProviders(<Header />);
    expect(screen.getByText('NFS-e Barra Mansa')).toBeInTheDocument();
  });

  it('renders navigation links', () => {
    renderWithProviders(<Header />);
    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('Login')).toBeInTheDocument();
    expect(screen.getByText('Dashboard')).toBeInTheDocument();
  });

  it('logo links to home page', () => {
    renderWithProviders(<Header />);
    const logoLink = screen.getByText('NFS-e Barra Mansa');
    expect(logoLink.closest('a')).toHaveAttribute('href', '/');
  });
});

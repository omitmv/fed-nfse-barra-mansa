import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../../styles';
import { Login } from '../Login';

const renderWithProviders = (component: React.ReactElement) => {
  return render(<ThemeProvider theme={theme}>{component}</ThemeProvider>);
};

describe('Login Component', () => {
  it('renders login form', () => {
    renderWithProviders(<Login />);
    expect(screen.getByText('Bem-vindo')).toBeInTheDocument();
    expect(screen.getByLabelText('E-mail')).toBeInTheDocument();
    expect(screen.getByLabelText('Senha')).toBeInTheDocument();
  });

  it('renders login button', () => {
    renderWithProviders(<Login />);
    expect(screen.getByRole('button', { name: 'Entrar' })).toBeInTheDocument();
  });

  it('renders forgot password link', () => {
    renderWithProviders(<Login />);
    expect(screen.getByText('Esqueceu sua senha?')).toBeInTheDocument();
  });

  it('allows user to type in email field', () => {
    renderWithProviders(<Login />);
    const emailInput = screen.getByLabelText('E-mail') as HTMLInputElement;
    fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
    expect(emailInput.value).toBe('test@example.com');
  });

  it('allows user to type in password field', () => {
    renderWithProviders(<Login />);
    const passwordInput = screen.getByLabelText('Senha') as HTMLInputElement;
    fireEvent.change(passwordInput, { target: { value: 'password123' } });
    expect(passwordInput.value).toBe('password123');
  });
});

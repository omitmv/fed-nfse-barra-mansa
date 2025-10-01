import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

// Mock do react-router-dom para os testes
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  BrowserRouter: ({ children }: { children: React.ReactNode }) => (
    <div>{children}</div>
  ),
}));

test('renders app without crashing', () => {
  render(<App />);
  expect(screen.getByText('Sistema NFS-e Barra Mansa')).toBeInTheDocument();
});

test('renders navigation', () => {
  render(<App />);
  expect(screen.getByText('Home')).toBeInTheDocument();
  expect(screen.getByText('Login')).toBeInTheDocument();
  expect(screen.getByText('Dashboard')).toBeInTheDocument();
});

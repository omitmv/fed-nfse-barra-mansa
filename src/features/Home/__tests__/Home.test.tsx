import React from 'react';
import { render, screen } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../../styles';
import { Home } from '../Home';

const renderWithProviders = (component: React.ReactElement) => {
  return render(<ThemeProvider theme={theme}>{component}</ThemeProvider>);
};

describe('Home Component', () => {
  it('renders the main title', () => {
    renderWithProviders(<Home />);
    expect(screen.getByText('Sistema NFS-e Barra Mansa')).toBeInTheDocument();
  });

  it('renders the subtitle', () => {
    renderWithProviders(<Home />);
    expect(
      screen.getByText(
        'Solução moderna e eficiente para emissão de Notas Fiscais de Serviço eletrônicas em Barra Mansa'
      )
    ).toBeInTheDocument();
  });

  it('renders all feature cards', () => {
    renderWithProviders(<Home />);
    expect(screen.getByText('Gestão Completa')).toBeInTheDocument();
    expect(screen.getByText('Segurança Garantida')).toBeInTheDocument();
    expect(screen.getByText('Fácil de Usar')).toBeInTheDocument();
  });

  it('renders feature descriptions', () => {
    renderWithProviders(<Home />);
    expect(
      screen.getByText(
        'Sistema completo para emissão e gerenciamento de Notas Fiscais de Serviço eletrônicas.'
      )
    ).toBeInTheDocument();
  });
});

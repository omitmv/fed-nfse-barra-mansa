import React from 'react';
import styled from 'styled-components';

const ReportsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.xl};
`;

const Title = styled.h1`
  font-size: ${({ theme }) => theme.typography.fontSize['3xl']};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  color: ${({ theme }) => theme.colors.text.primary};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
`;

const ReportsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: ${({ theme }) => theme.spacing.lg};
`;

const ReportCard = styled.div`
  background-color: ${({ theme }) => theme.colors.background.paper};
  border: 1px solid ${({ theme }) => theme.colors.border.main};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  padding: ${({ theme }) => theme.spacing.xl};
  cursor: pointer;
  transition: all ${({ theme }) => theme.transitions.normal};

  &:hover {
    box-shadow: ${({ theme }) => theme.shadows.md};
    border-color: ${({ theme }) => theme.colors.primary.main};
  }
`;

const ReportIcon = styled.div`
  font-size: 32px;
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

const ReportTitle = styled.h3`
  font-size: ${({ theme }) => theme.typography.fontSize.lg};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
  color: ${({ theme }) => theme.colors.text.primary};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
`;

const ReportDescription = styled.p`
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  color: ${({ theme }) => theme.colors.text.secondary};
  line-height: ${({ theme }) => theme.typography.lineHeight.relaxed};
`;

const reports = [
  {
    icon: '📊',
    title: 'Relatório de NFS-e Emitidas',
    description:
      'Visualize todas as notas fiscais emitidas em um período específico',
  },
  {
    icon: '💰',
    title: 'Relatório Financeiro',
    description: 'Acompanhe o faturamento e impostos recolhidos',
  },
  {
    icon: '📈',
    title: 'Análise de Desempenho',
    description: 'Métricas e indicadores de performance do sistema',
  },
  {
    icon: '🔍',
    title: 'Auditoria de Sistema',
    description: 'Histórico de ações e modificações realizadas',
  },
  {
    icon: '📋',
    title: 'Relatório de Usuários',
    description: 'Informações sobre usuários ativos e permissões',
  },
  {
    icon: '⚠️',
    title: 'Relatório de Erros',
    description: 'Acompanhe falhas e problemas identificados',
  },
];

export const Reports: React.FC = () => {
  return (
    <ReportsContainer>
      <Title>Relatórios</Title>

      <ReportsGrid>
        {reports.map((report, index) => (
          <ReportCard key={index}>
            <ReportIcon>{report.icon}</ReportIcon>
            <ReportTitle>{report.title}</ReportTitle>
            <ReportDescription>{report.description}</ReportDescription>
          </ReportCard>
        ))}
      </ReportsGrid>
    </ReportsContainer>
  );
};

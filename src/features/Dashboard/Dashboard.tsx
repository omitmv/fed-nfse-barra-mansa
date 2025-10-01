import React from 'react';
import styled from 'styled-components';

const DashboardContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.xl};
`;

const DashboardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing.md};
`;

const Title = styled.h1`
  font-size: ${({ theme }) => theme.typography.fontSize['3xl']};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  color: ${({ theme }) => theme.colors.text.primary};
`;

const WelcomeMessage = styled.p`
  font-size: ${({ theme }) => theme.typography.fontSize.base};
  color: ${({ theme }) => theme.colors.text.secondary};
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: ${({ theme }) => theme.spacing.lg};
  margin-bottom: ${({ theme }) => theme.spacing.xl};
`;

const StatCard = styled.div`
  background-color: ${({ theme }) => theme.colors.background.paper};
  border: 1px solid ${({ theme }) => theme.colors.border.main};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  padding: ${({ theme }) => theme.spacing.xl};
  transition: all ${({ theme }) => theme.transitions.normal};

  &:hover {
    box-shadow: ${({ theme }) => theme.shadows.md};
  }
`;

const StatTitle = styled.h3`
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  color: ${({ theme }) => theme.colors.text.secondary};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
  text-transform: uppercase;
  letter-spacing: 0.05em;
`;

const StatValue = styled.div`
  font-size: ${({ theme }) => theme.typography.fontSize['2xl']};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  color: ${({ theme }) => theme.colors.text.primary};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
`;

const StatChange = styled.div<{ $positive?: boolean }>`
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  color: ${({ $positive, theme }) =>
    $positive ? theme.colors.status.success : theme.colors.status.error};
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.xs};
`;

const ActionsSection = styled.section`
  background-color: ${({ theme }) => theme.colors.background.paper};
  border: 1px solid ${({ theme }) => theme.colors.border.main};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  padding: ${({ theme }) => theme.spacing.xl};
`;

const SectionTitle = styled.h2`
  font-size: ${({ theme }) => theme.typography.fontSize.xl};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
  color: ${({ theme }) => theme.colors.text.primary};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
`;

const ActionsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: ${({ theme }) => theme.spacing.lg};
`;

const ActionCard = styled.div`
  border: 1px solid ${({ theme }) => theme.colors.border.main};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  padding: ${({ theme }) => theme.spacing.lg};
  cursor: pointer;
  transition: all ${({ theme }) => theme.transitions.fast};

  &:hover {
    border-color: ${({ theme }) => theme.colors.primary.main};
    background-color: ${({ theme }) => theme.colors.primary.main}10;
  }
`;

const ActionIcon = styled.div`
  font-size: ${({ theme }) => theme.typography.fontSize['2xl']};
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

const ActionTitle = styled.h3`
  font-size: ${({ theme }) => theme.typography.fontSize.lg};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  color: ${({ theme }) => theme.colors.text.primary};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
`;

const ActionDescription = styled.p`
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  color: ${({ theme }) => theme.colors.text.secondary};
  line-height: ${({ theme }) => theme.typography.lineHeight.relaxed};
`;

const stats = [
  {
    title: 'NFS-e Emitidas',
    value: '1.234',
    change: '+12%',
    positive: true,
  },
  {
    title: 'Valor Total',
    value: 'R$ 89.500',
    change: '+8%',
    positive: true,
  },
  {
    title: 'Pendentes',
    value: '23',
    change: '-5%',
    positive: false,
  },
  {
    title: 'Taxa de Sucesso',
    value: '98.5%',
    change: '+1.2%',
    positive: true,
  },
];

const actions = [
  {
    icon: '📄',
    title: 'Emitir Nova NFS-e',
    description: 'Criar e emitir uma nova Nota Fiscal de Serviço eletrônica',
  },
  {
    icon: '📊',
    title: 'Relatórios',
    description: 'Visualizar relatórios detalhados e extrair dados',
  },
  {
    icon: '🔍',
    title: 'Consultar NFS-e',
    description: 'Buscar e visualizar notas fiscais já emitidas',
  },
  {
    icon: '⚙️',
    title: 'Configurações',
    description: 'Gerenciar configurações da conta e preferências',
  },
];

export const Dashboard: React.FC = () => {
  return (
    <DashboardContainer>
      <DashboardHeader>
        <div>
          <Title>Dashboard</Title>
          <WelcomeMessage>
            Bem-vindo de volta! Aqui está um resumo da sua atividade.
          </WelcomeMessage>
        </div>
      </DashboardHeader>

      <StatsGrid>
        {stats.map((stat, index) => (
          <StatCard key={index}>
            <StatTitle>{stat.title}</StatTitle>
            <StatValue>{stat.value}</StatValue>
            <StatChange $positive={stat.positive}>
              {stat.positive ? '↗' : '↘'} {stat.change} vs mês anterior
            </StatChange>
          </StatCard>
        ))}
      </StatsGrid>

      <ActionsSection>
        <SectionTitle>Ações Rápidas</SectionTitle>
        <ActionsGrid>
          {actions.map((action, index) => (
            <ActionCard key={index}>
              <ActionIcon>{action.icon}</ActionIcon>
              <ActionTitle>{action.title}</ActionTitle>
              <ActionDescription>{action.description}</ActionDescription>
            </ActionCard>
          ))}
        </ActionsGrid>
      </ActionsSection>
    </DashboardContainer>
  );
};

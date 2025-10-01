import React from 'react';
import styled from 'styled-components';

const SecurityContainer = styled.div`
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

const SecuritySection = styled.div`
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

const SecurityRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${({ theme }) => theme.spacing.md};
  border-bottom: 1px solid ${({ theme }) => theme.colors.border.light};

  &:last-child {
    border-bottom: none;
  }
`;

const SecurityLabel = styled.span`
  font-size: ${({ theme }) => theme.typography.fontSize.base};
  color: ${({ theme }) => theme.colors.text.primary};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
`;

const SecurityValue = styled.span`
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  color: ${({ theme }) => theme.colors.text.secondary};
`;

const StatusBadge = styled.span<{ status: 'active' | 'inactive' | 'warning' }>`
  padding: ${({ theme }) => theme.spacing.xs} ${({ theme }) => theme.spacing.sm};
  border-radius: ${({ theme }) => theme.borderRadius.full};
  font-size: ${({ theme }) => theme.typography.fontSize.xs};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  text-transform: uppercase;

  ${({ status, theme }) => {
    switch (status) {
      case 'active':
        return `
          background-color: #dcfce7;
          color: #15803d;
        `;
      case 'inactive':
        return `
          background-color: #fef2f2;
          color: #dc2626;
        `;
      case 'warning':
        return `
          background-color: #fef3c7;
          color: #d97706;
        `;
      default:
        return `
          background-color: ${theme.colors.background.paper};
          color: ${theme.colors.text.secondary};
        `;
    }
  }}
`;

const Button = styled.button`
  background-color: ${({ theme }) => theme.colors.primary.main};
  color: white;
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius.md};
  padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.lg};
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  cursor: pointer;
  transition: all ${({ theme }) => theme.transitions.normal};

  &:hover {
    background-color: ${({ theme }) => theme.colors.primary.dark};
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.md};
  margin-top: ${({ theme }) => theme.spacing.md};
`;

const WarningButton = styled(Button)`
  background-color: #d97706;

  &:hover {
    background-color: #b45309;
  }
`;

export const SecurityConfig: React.FC = () => {
  return (
    <SecurityContainer>
      <Title>Configurações de Segurança</Title>

      <SecuritySection>
        <SectionTitle>Autenticação</SectionTitle>
        <SecurityRow>
          <SecurityLabel>Autenticação Dois Fatores (2FA)</SecurityLabel>
          <StatusBadge status="active">Ativo</StatusBadge>
        </SecurityRow>
        <SecurityRow>
          <SecurityLabel>Login com Certificado Digital</SecurityLabel>
          <StatusBadge status="active">Ativo</StatusBadge>
        </SecurityRow>
        <SecurityRow>
          <SecurityLabel>Tempo de Sessão</SecurityLabel>
          <SecurityValue>8 horas</SecurityValue>
        </SecurityRow>
        <SecurityRow>
          <SecurityLabel>Bloqueio por Tentativas</SecurityLabel>
          <SecurityValue>5 tentativas / 15 minutos</SecurityValue>
        </SecurityRow>
      </SecuritySection>

      <SecuritySection>
        <SectionTitle>Certificados Digitais</SectionTitle>
        <SecurityRow>
          <SecurityLabel>Certificado Principal</SecurityLabel>
          <StatusBadge status="active">Válido até 15/12/2024</StatusBadge>
        </SecurityRow>
        <SecurityRow>
          <SecurityLabel>Certificado Backup</SecurityLabel>
          <StatusBadge status="warning">Expira em 30 dias</StatusBadge>
        </SecurityRow>
        <SecurityRow>
          <SecurityLabel>Verificação de Revogação</SecurityLabel>
          <StatusBadge status="active">Ativo</StatusBadge>
        </SecurityRow>
        <SecurityRow>
          <SecurityLabel>Validação de Cadeia</SecurityLabel>
          <StatusBadge status="active">Ativo</StatusBadge>
        </SecurityRow>
      </SecuritySection>

      <SecuritySection>
        <SectionTitle>Logs e Auditoria</SectionTitle>
        <SecurityRow>
          <SecurityLabel>Log de Acesso</SecurityLabel>
          <StatusBadge status="active">Ativo</StatusBadge>
        </SecurityRow>
        <SecurityRow>
          <SecurityLabel>Log de Operações</SecurityLabel>
          <StatusBadge status="active">Ativo</StatusBadge>
        </SecurityRow>
        <SecurityRow>
          <SecurityLabel>Retenção de Logs</SecurityLabel>
          <SecurityValue>90 dias</SecurityValue>
        </SecurityRow>
        <SecurityRow>
          <SecurityLabel>Backup de Logs</SecurityLabel>
          <StatusBadge status="active">Diário</StatusBadge>
        </SecurityRow>
      </SecuritySection>

      <SecuritySection>
        <SectionTitle>Políticas de Senha</SectionTitle>
        <SecurityRow>
          <SecurityLabel>Tamanho Mínimo</SecurityLabel>
          <SecurityValue>8 caracteres</SecurityValue>
        </SecurityRow>
        <SecurityRow>
          <SecurityLabel>Complexidade</SecurityLabel>
          <SecurityValue>Maiúscula, minúscula, número e símbolo</SecurityValue>
        </SecurityRow>
        <SecurityRow>
          <SecurityLabel>Expiração</SecurityLabel>
          <SecurityValue>90 dias</SecurityValue>
        </SecurityRow>
        <SecurityRow>
          <SecurityLabel>Histórico</SecurityLabel>
          <SecurityValue>Últimas 12 senhas</SecurityValue>
        </SecurityRow>
      </SecuritySection>

      <SecuritySection>
        <SectionTitle>Ações de Segurança</SectionTitle>
        <ButtonGroup>
          <Button>Atualizar Certificados</Button>
          <Button>Exportar Logs</Button>
          <WarningButton>Forçar Logout Geral</WarningButton>
        </ButtonGroup>
      </SecuritySection>
    </SecurityContainer>
  );
};

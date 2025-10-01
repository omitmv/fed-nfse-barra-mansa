import React from 'react';
import styled from 'styled-components';

const ConfigContainer = styled.div`
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

const ConfigSection = styled.div`
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

const ConfigRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${({ theme }) => theme.spacing.md};
  border-bottom: 1px solid ${({ theme }) => theme.colors.border.light};

  &:last-child {
    border-bottom: none;
  }
`;

const ConfigLabel = styled.span`
  font-size: ${({ theme }) => theme.typography.fontSize.base};
  color: ${({ theme }) => theme.colors.text.primary};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
`;

const ConfigValue = styled.span`
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  color: ${({ theme }) => theme.colors.text.secondary};
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

const SecondaryButton = styled(Button)`
  background-color: #6b7280;

  &:hover {
    background-color: #4b5563;
  }
`;

const DangerButton = styled(Button)`
  background-color: #dc2626;

  &:hover {
    background-color: #b91c1c;
  }
`;

export const SystemConfig: React.FC = () => {
  return (
    <ConfigContainer>
      <Title>Configurações do Sistema</Title>

      <ConfigSection>
        <SectionTitle>Configurações Gerais</SectionTitle>
        <ConfigRow>
          <ConfigLabel>Nome do Sistema</ConfigLabel>
          <ConfigValue>FED NFS-e Barra Mansa</ConfigValue>
        </ConfigRow>
        <ConfigRow>
          <ConfigLabel>Versão</ConfigLabel>
          <ConfigValue>1.0.0</ConfigValue>
        </ConfigRow>
        <ConfigRow>
          <ConfigLabel>Ambiente</ConfigLabel>
          <ConfigValue>Produção</ConfigValue>
        </ConfigRow>
        <ConfigRow>
          <ConfigLabel>Timezone</ConfigLabel>
          <ConfigValue>America/Sao_Paulo</ConfigValue>
        </ConfigRow>
      </ConfigSection>

      <ConfigSection>
        <SectionTitle>Configurações de NFS-e</SectionTitle>
        <ConfigRow>
          <ConfigLabel>URL do Webservice</ConfigLabel>
          <ConfigValue>https://nfse.barramansa.rj.gov.br/ws</ConfigValue>
        </ConfigRow>
        <ConfigRow>
          <ConfigLabel>Timeout de Conexão</ConfigLabel>
          <ConfigValue>30 segundos</ConfigValue>
        </ConfigRow>
        <ConfigRow>
          <ConfigLabel>Certificado Digital</ConfigLabel>
          <ConfigValue>Configurado (válido até 15/12/2024)</ConfigValue>
        </ConfigRow>
        <ConfigRow>
          <ConfigLabel>Modo de Operação</ConfigLabel>
          <ConfigValue>Sincrono</ConfigValue>
        </ConfigRow>
      </ConfigSection>

      <ConfigSection>
        <SectionTitle>Configurações de Backup</SectionTitle>
        <ConfigRow>
          <ConfigLabel>Backup Automático</ConfigLabel>
          <ConfigValue>Habilitado</ConfigValue>
        </ConfigRow>
        <ConfigRow>
          <ConfigLabel>Frequência</ConfigLabel>
          <ConfigValue>Diário - 02:00</ConfigValue>
        </ConfigRow>
        <ConfigRow>
          <ConfigLabel>Retenção</ConfigLabel>
          <ConfigValue>30 dias</ConfigValue>
        </ConfigRow>
        <ConfigRow>
          <ConfigLabel>Local de Armazenamento</ConfigLabel>
          <ConfigValue>/backup/nfse/</ConfigValue>
        </ConfigRow>
      </ConfigSection>

      <ConfigSection>
        <SectionTitle>Ações</SectionTitle>
        <ButtonGroup>
          <Button>Salvar Configurações</Button>
          <SecondaryButton>Restaurar Padrões</SecondaryButton>
          <DangerButton>Reiniciar Sistema</DangerButton>
        </ButtonGroup>
      </ConfigSection>
    </ConfigContainer>
  );
};

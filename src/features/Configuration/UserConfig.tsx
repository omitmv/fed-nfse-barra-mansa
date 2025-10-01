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

const ConfigItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${({ theme }) => theme.spacing.md} 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border.light};

  &:last-child {
    border-bottom: none;
  }
`;

const ConfigLabel = styled.span`
  font-size: ${({ theme }) => theme.typography.fontSize.base};
  color: ${({ theme }) => theme.colors.text.primary};
`;

const ConfigValue = styled.span`
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  color: ${({ theme }) => theme.colors.text.secondary};
`;

export const UserConfig: React.FC = () => {
  return (
    <ConfigContainer>
      <Title>Configuração de Usuário</Title>

      <ConfigSection>
        <SectionTitle>Informações Pessoais</SectionTitle>
        <ConfigItem>
          <ConfigLabel>Nome</ConfigLabel>
          <ConfigValue>Usuário Sistema</ConfigValue>
        </ConfigItem>
        <ConfigItem>
          <ConfigLabel>E-mail</ConfigLabel>
          <ConfigValue>usuario@barramansa.gov.br</ConfigValue>
        </ConfigItem>
        <ConfigItem>
          <ConfigLabel>Cargo</ConfigLabel>
          <ConfigValue>Administrador</ConfigValue>
        </ConfigItem>
      </ConfigSection>

      <ConfigSection>
        <SectionTitle>Preferências</SectionTitle>
        <ConfigItem>
          <ConfigLabel>Tema</ConfigLabel>
          <ConfigValue>Claro</ConfigValue>
        </ConfigItem>
        <ConfigItem>
          <ConfigLabel>Idioma</ConfigLabel>
          <ConfigValue>Português (BR)</ConfigValue>
        </ConfigItem>
        <ConfigItem>
          <ConfigLabel>Notificações</ConfigLabel>
          <ConfigValue>Ativadas</ConfigValue>
        </ConfigItem>
      </ConfigSection>

      <ConfigSection>
        <SectionTitle>Segurança</SectionTitle>
        <ConfigItem>
          <ConfigLabel>Última alteração de senha</ConfigLabel>
          <ConfigValue>15/09/2025</ConfigValue>
        </ConfigItem>
        <ConfigItem>
          <ConfigLabel>Autenticação de dois fatores</ConfigLabel>
          <ConfigValue>Ativada</ConfigValue>
        </ConfigItem>
      </ConfigSection>
    </ConfigContainer>
  );
};

import React, { useState } from 'react';
import styled from 'styled-components';
import {
  applyMask,
  findCNPJ,
  handleSubmit,
} from './CompanyRegistrationController';
import { START_LOADING, STOP_LOADING } from '../../context/constant';
import { useLoading } from '../../context/LoadingContext';
import FullScreenLoader from '../../components/shared/FullScreenLoader';

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h1`
  font-size: 24px;
  margin-bottom: 20px;
  text-align: center;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  margin-bottom: 8px;
  font-weight: bold;
`;

const Input = styled.input`
  margin-bottom: 16px;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Select = styled.select`
  margin-bottom: 16px;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Button = styled.button`
  padding: 10px;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #45a049;
  }
`;

const CompanyRegistration: React.FC = () => {
  const [formData, setFormData] = useState({
    cpfCnpj: '',
    razaoSocial: '',
    nomeFantasia: '',
    inscricaoEstadual: '',
    inscricaoMunicipal: '',
    optanteSimplesNacional: '1',
    tpCadastro: 'A',
    tpEmpresa: 'J',
    flStatus: 'A',
  });
  const { isLoading, dispatch } = useLoading();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;

    if (name === 'tpEmpresa') {
      const maxLength = value === 'J' ? 14 : 11;
      const mask = value === 'J' ? '99999999999999' : '99999999999';
      setFormData(prev => ({
        ...prev,
        [name]: value,
        cpfCnpj: applyMask(prev.cpfCnpj.slice(0, maxLength), mask),
      }));
    } else if (name === 'cpfCnpj') {
      const mask =
        formData.tpEmpresa === 'J' ? '99999999999999' : '99999999999';
      const maxLength = formData.tpEmpresa === 'J' ? 14 : 11;
      setFormData(prev => ({
        ...prev,
        [name]: applyMask(value.slice(0, maxLength), mask),
      }));
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleBlur = async (e: React.FocusEvent<HTMLInputElement>) => {
    if (e.target.name === 'cpfCnpj') {
      dispatch({ type: START_LOADING });
      try {
        const response = await findCNPJ(e, formData.cpfCnpj);
        if (response) {
          setFormData(prev => ({
            ...prev,
            cpfCnpj: response.cnpj,
            razaoSocial: response.razao_social,
            nomeFantasia: response.nome_fantasia,
            optanteSimplesNacional:
              response.opcao_simples_nacional === ''
                ? '1'
                : response.opcao_simples_nacional,
          }));
        }
      } catch (error) {
        console.error('Error fetching CNPJ:', error);
      } finally {
        dispatch({ type: STOP_LOADING });
      }
    }
  };

  return (
    <>
      {isLoading && <FullScreenLoader />}
      <Container>
        <Title>Cadastro de Empresa</Title>
        <Form onSubmit={e => handleSubmit(e, formData)}>
          <Label htmlFor="tpCadastro">Tipo de Cadastro</Label>
          <Select
            id="tpCadastro"
            name="tpCadastro"
            value={formData.tpCadastro}
            onChange={handleChange}
            required
            aria-label="Tipo de Cadastro"
            title="Tipo de Cadastro"
          >
            <option value="C">Cliente</option>
            <option value="F">Fornecedor</option>
            <option value="A">Ambos</option>
          </Select>

          <Label htmlFor="tpEmpresa">Tipo de Empresa</Label>
          <Select
            id="tpEmpresa"
            name="tpEmpresa"
            value={formData.tpEmpresa}
            onChange={handleChange}
            required
            aria-label="Tipo de Empresa"
            title="Tipo de Empresa"
          >
            <option value="J">Jurídica</option>
            <option value="F">Física</option>
          </Select>

          <Label htmlFor="cpfCnpj">CPF/CNPJ</Label>
          <Input
            type="text"
            id="cpfCnpj"
            name="cpfCnpj"
            value={formData.cpfCnpj}
            onChange={handleChange}
            onBlur={handleBlur}
            required
          />

          <Label htmlFor="razaoSocial">Razão Social</Label>
          <Input
            type="text"
            id="razaoSocial"
            name="razaoSocial"
            value={formData.razaoSocial}
            onChange={handleChange}
            required
          />

          <Label htmlFor="nomeFantasia">Nome Fantasia</Label>
          <Input
            type="text"
            id="nomeFantasia"
            name="nomeFantasia"
            value={formData.nomeFantasia}
            onChange={handleChange}
          />

          <Label htmlFor="inscricaoEstadual">Inscrição Estadual</Label>
          <Input
            type="text"
            id="inscricaoEstadual"
            name="inscricaoEstadual"
            value={formData.inscricaoEstadual}
            onChange={handleChange}
          />

          <Label htmlFor="inscricaoMunicipal">Inscrição Municipal</Label>
          <Input
            type="text"
            id="inscricaoMunicipal"
            name="inscricaoMunicipal"
            value={formData.inscricaoMunicipal}
            onChange={handleChange}
          />

          <Label htmlFor="optanteSimplesNacional">
            Optante pelo Simples Nacional
          </Label>
          <Select
            id="optanteSimplesNacional"
            name="optanteSimplesNacional"
            value={formData.optanteSimplesNacional}
            onChange={handleChange}
            required
            aria-label="Optante pelo Simples Nacional"
            title="Optante pelo Simples Nacional"
          >
            <option value="1">Sim</option>
            <option value="2">Não</option>
          </Select>

          <Label htmlFor="flStatus">Status</Label>
          <Select
            id="flStatus"
            name="flStatus"
            value={formData.flStatus}
            onChange={handleChange}
            required
            aria-label="Status"
            title="Status"
          >
            <option value="A">Ativo</option>
            <option value="I">Inativo</option>
          </Select>

          <Button type="submit">Salvar</Button>
        </Form>
      </Container>
    </>
  );
};

export default CompanyRegistration;

import { requestResolver } from '../../utils/requestResolver';

export const applyMask = (value, mask) => {
  let i = 0;
  const onlyNumbers = value.replace(/\D/g, '');
  return mask.replace(/9/g, () => onlyNumbers[i++] || '');
};

export const handleSubmit = (e, formData) => {
  e.preventDefault();
  console.log('Form Data:', formData);
  // Aqui você pode adicionar a lógica para enviar os dados para a API
};

export const findCNPJ = async (e, cnpj) => {
  e.preventDefault();
  const cleanedCNPJ = cnpj.replace(/\D/g, '');
  if (cleanedCNPJ.length !== 14) {
    alert('CNPJ inválido. Deve conter 14 dígitos.');
    return;
  }
  const response = await requestResolver({
    method: 'POST',
    uri: 'http://localhost:8080/nfse/cnpj',
    data: { cnpj },
  });
  return response;
};

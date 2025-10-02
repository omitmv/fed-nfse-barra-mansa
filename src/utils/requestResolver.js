import axiosLib from 'axios';

export const requestResolver = async ({
  method = 'POST',
  uri,
  header = {},
  data = null,
  timeout = 10000,
}) => {
  try {
    const axios = axiosLib.create({
      headers: { 'Content-Type': 'application/json;charset=UTF-8', ...header },
      timeout,
    });
    const response = await axios({ method, url: uri, data });
    return response.data;
  } catch (error) {
    console.error('Request Error:', error);
    throw error;
  }
};

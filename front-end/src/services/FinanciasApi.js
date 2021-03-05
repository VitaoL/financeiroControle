import axios from 'axios';

const baseUrl = 'http://localhost:3001';

export const postLogin = async (email, name, password) => {
  return axios.post(`${baseUrl}/login`, { email, name, password });
};
export const postTransitions = async (description, value, wallet, userId) => {
  return axios.post(`${baseUrl}/controle`, {
    description,
    value,
    wallet,
    userId,
  });
};

export const getTransitions = async (userId) => {
  return axios.get(`${baseUrl}/controle/?id=${userId}`);
};


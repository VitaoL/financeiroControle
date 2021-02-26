import axios from 'axios';

const baseUrl = 'http://localhost:3001';

export const postLogin = async (email, name, password) => {
  return axios.post(`${baseUrl}/login`, { email, name, password });
};

export const postTransitions = async (description, value, investment, userId) => {
  return axios.post(`${baseUrl}/controle`, {
    description,
    value,
    investment,
    userId,
  });
};

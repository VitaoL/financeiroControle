import axios from 'axios';

const baseUrl = 'http://localhost:3001';

export const postLogin = async (email, name, password) => {
  return axios.post(`${baseUrl}/login`, { email, name, password });
};

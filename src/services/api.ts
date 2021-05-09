import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://whatsapp-api-fake.herokuapp.com',
});

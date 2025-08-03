import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:8000', // for upload
});

export const downloadAPI = axios.create({
  baseURL: 'http://localhost:8000', // for download
});

export default API;

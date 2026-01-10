import axios from 'axios';
import type { AxiosInstance, AxiosResponse } from 'axios';

const api: AxiosInstance = axios.create({
  baseURL: 'http://localhost:8000',
});

export default api;
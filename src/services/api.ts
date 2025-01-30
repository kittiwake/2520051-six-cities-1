import axios, {AxiosInstance} from 'axios';
import { BASE_URL } from '../constant';

export const createAPI = (): AxiosInstance => {
  const api = axios.create({
    baseURL: BASE_URL,
    timeout: 5000,
  });
  return api;
};



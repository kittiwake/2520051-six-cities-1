import axios, { AxiosInstance, InternalAxiosRequestConfig} from 'axios';
import { BASE_URL } from '../constant';
import { getToken } from './token';


export const createAPI = (): AxiosInstance => {
  const api = axios.create({
    baseURL: BASE_URL,
    timeout: 5000,
  });

  api.interceptors.request.use(
    (config: InternalAxiosRequestConfig) => {
      const token = getToken();

      if (token) {
        config.headers['x-token'] = token;
      }

      return config;
    },
  );

  return api;
};



import axios, { AxiosInstance, AxiosResponse, AxiosError, InternalAxiosRequestConfig } from 'axios';
import { StatusCodes } from 'http-status-codes';
import { toast } from 'react-toastify';
import { getToken } from './token';
import { browserHistory } from '../browser-history';
import { AppRoute } from '../const';

type TDetailMessageType = {
  type: string;
  message: string;
}

const StatusCodeMapping: Record<number, boolean> = {
  [StatusCodes.BAD_GATEWAY]: true,
  [StatusCodes.GATEWAY_TIMEOUT]: true,
  [StatusCodes.INTERNAL_SERVER_ERROR]: true,
  [StatusCodes.SERVICE_UNAVAILABLE]: true,
};

const shouldDisplayError = (response: AxiosResponse) => !!StatusCodeMapping[response.status];

const BACKEND_URL = 'https://14.design.pages.academy/six-cities';
const REQUEST_TIMEOUT = 5000;

const createAPI = (): AxiosInstance => {
  const api = axios.create({
    baseURL: BACKEND_URL,
    timeout: REQUEST_TIMEOUT,
  });

  api.interceptors.request.use(
    (config: InternalAxiosRequestConfig) => {
      const token = getToken();

      if (token && config.headers) {
        config.headers['x-token'] = token;
      }

      return config;
    },
  );

  api.interceptors.response.use(
    (response) => response,
    (error: AxiosError<TDetailMessageType>) => {
      if (error.response && shouldDisplayError(error.response)) {
        const detailMessage = (error.response.data);
        toast.warn(`Server Error: ${detailMessage.message}`, {
          position: toast.POSITION.TOP_CENTER
        });
      } else if (error.response?.status === StatusCodes.UNAUTHORIZED) {
        toast.warn('You are not an authorized user! Log in or create a new account for free.', {
          position: toast.POSITION.TOP_CENTER
        });
      } else if (error.response?.status === StatusCodes.NOT_FOUND) {
        browserHistory.push(AppRoute.NotFound);
      }

      throw error;
    }
  );

  return api;
};

export { createAPI };

import { AxiosInstance } from 'axios';
import { TAppDispatch, TState } from '.';

type TThunkApiConfig = {
  dispatch: TAppDispatch;
  state: TState;
  extra: AxiosInstance;
};

export { type TThunkApiConfig };

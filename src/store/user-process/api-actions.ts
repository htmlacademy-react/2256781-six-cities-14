import { createAsyncThunk } from '@reduxjs/toolkit';
import { TThunkApiConfig } from '../../types/thunk';
import { APIRoute, NameSpace } from '../../const';
import { TAuthData, TUserData } from '../../types';
import { dropToken, saveToken } from '../../services/token';

const getAsyncAuth = createAsyncThunk<TUserData, undefined, TThunkApiConfig>(
  `${NameSpace.Data}/fetchAuthStatus`,
  async (_arg, { extra: api }) => {
    try {
      const { data } = await api.get<TUserData>(APIRoute.Login);

      return data;
    } catch (error) {
      throw new Error();
    }
  },
);

const postAsyncAuth = createAsyncThunk<TUserData, TAuthData, TThunkApiConfig>(
  `${NameSpace.Data}/fetchLogin`,
  async ({ email, password }, { extra: api }) => {
    try {
      const { data } = await api.post<TUserData>(APIRoute.Login, { email, password });
      saveToken(data.token);
      return data;
    } catch (error) {
      throw new Error();
    }
  },
);

const deleteAsyncAuth = createAsyncThunk<void, undefined, TThunkApiConfig>(
  `${NameSpace.Data}/fetchLogout`,
  async (_arg, { extra: api }) => {
    try {
      await api.delete(APIRoute.Logout);
      dropToken();
    } catch (error) {
      throw new Error();
    }
  }
);

export { getAsyncAuth, postAsyncAuth, deleteAsyncAuth };

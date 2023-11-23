import { createAsyncThunk } from '@reduxjs/toolkit';
import { TOffersPreview } from '../../types';
import { APIRoute, NameSpace } from '../../const';
import { TThunkApiConfig } from '../../types/thunk';

const getAsyncFavorites = createAsyncThunk<TOffersPreview, undefined, TThunkApiConfig>(
  `${NameSpace.Data}/fetchFavorites`,
  async (_arg, { extra: api }) => {
    try {
      const { data } = await api.get<TOffersPreview>(APIRoute.Favorite);

      return data;
    } catch (error) {
      throw new Error();
    }
  },
);

export { getAsyncFavorites };

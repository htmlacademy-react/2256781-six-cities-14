import { createAsyncThunk } from '@reduxjs/toolkit';
import { TOffersPreview } from '../../types';
import { TThunkApiConfig } from '../../types/thunk';
import { APIRoute, NameSpace } from '../../const';

const getAsyncOffers = createAsyncThunk<TOffersPreview, undefined, TThunkApiConfig>(
  `${NameSpace.Data}/fetchOffers`,
  async (_arg, { extra: api }) => {
    try {
      const { data } = await api.get<TOffersPreview>(APIRoute.Offers);

      return data;
    } catch (error) {
      throw new Error();
    }
  },
);

export { getAsyncOffers };

import { createAsyncThunk } from '@reduxjs/toolkit';
import { TFavoritePost, TOfferPreview, TOffersPreview } from '../../types';
import { APIRoute, NameSpace } from '../../const';
import { TThunkApiConfig } from '../../types/thunk';
import { replaceURI } from '../../utils';
import { updateOffers } from '..';

const getAsyncFavorites = createAsyncThunk<TOffersPreview, undefined, TThunkApiConfig>(
  `${NameSpace.Data}/getFavorites`,
  async (_arg, { extra: api }) => {
    try {
      const { data } = await api.get<TOffersPreview>(APIRoute.Favorite);
      return data;
    } catch (error) {
      throw new Error();
    }
  },
);

const postAsyncFavorite = createAsyncThunk<TOfferPreview, TFavoritePost, TThunkApiConfig>(
  `${NameSpace.Data}/postFavorite`,
  async ({ offerId, status }, { rejectWithValue, extra: api, dispatch }) => {
    try {
      const { data } = await api.post<TOfferPreview>(replaceURI(APIRoute.FavoriteStatus, offerId, String(status)), {});
      dispatch(updateOffers(data));
      return data;
    } catch (e) {
      return rejectWithValue(e as Error);
    }
  },
);

export { getAsyncFavorites, postAsyncFavorite };

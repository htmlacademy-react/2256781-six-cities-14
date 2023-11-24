import { createAsyncThunk } from '@reduxjs/toolkit';
import { replaceURI } from '../../utils';
import { TThunkApiConfig } from '../../types/thunk';
import { TOffer, TOfferId, TOffersPreview, TReview, TReviewData, TReviews } from '../../types';
import { APIRoute, NameSpace } from '../../const';

const getAsyncOffer = createAsyncThunk<TOffer, TOfferId, TThunkApiConfig>(
  `${NameSpace.Data}/fetchOffer`,
  async (offerId, { extra: api }) => {
    try {
      const route = replaceURI(APIRoute.Offer, offerId);
      const { data } = await api.get<TOffer>(route);

      return data;
    } catch (error) {
      throw new Error();
    }
  },
);

const getAsyncNearbyPlaces = createAsyncThunk<TOffersPreview, TOfferId, TThunkApiConfig>(
  `${NameSpace.Data}/fetchNearPlaces`,
  async (offerId, { extra: api }) => {
    try {
      const route = replaceURI(APIRoute.Nearby, offerId);
      const { data } = await api.get<TOffersPreview>(route);

      return data;
    } catch (error) {
      throw new Error();
    }
  },
);

const getAsyncReviews = createAsyncThunk<TReviews, TOfferId, TThunkApiConfig>(
  `${NameSpace.Data}/fetchReviews`,
  async (offerId, { extra: api }) => {
    try {
      const route = replaceURI(APIRoute.Review, offerId);
      const { data } = await api.get<TReviews>(route);

      return data;
    } catch (error) {
      throw new Error();
    }
  },
);

const postAsyncReview = createAsyncThunk<TReview, TReviewData, TThunkApiConfig>(
  `${NameSpace.Data}/fetchReview`,
  async ({ id: offerId, rating, comment }, { extra: api }) => {
    try {
      const route = replaceURI(APIRoute.Review, offerId);
      const { data } = await api.post<TReview>(route, { rating, comment });

      return data;
    } catch (error) {
      throw new Error();
    }
  },
);

export { getAsyncNearbyPlaces, getAsyncOffer, getAsyncReviews, postAsyncReview };

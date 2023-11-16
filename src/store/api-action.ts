import { createAsyncThunk } from '@reduxjs/toolkit';
import { OfferId, TAppDispatch, TAuthData, TOffer, TOffersPreview, TReviewData, TReviews, TState, TUserData } from '../types';
import { AxiosInstance } from 'axios';
import { assignFavorites, assignLoadingStatus, assignNearPlaces, assignOffer, assignOffers, assignReviews, assignUser, assignAuthStatus, assignEmptyUser } from '.';
import { APIRoute, AuthorizationStatus, NameSpace } from '../const';
import { toast } from 'react-toastify';
import { dropToken, saveToken } from '../services/token';

function replaceOfferId(originalValue: string, offerId: string): string {
  const pattern = /{offerId}/g;
  return originalValue.replace(pattern, offerId);
}

const getAuth = createAsyncThunk<void, undefined, {
  dispatch: TAppDispatch;
  state: TState;
  extra: AxiosInstance;
}>(
  `${NameSpace.Data}/fetchAuthStatus`,
  async (_arg, { dispatch, extra: api }) => {
    try {
      dispatch(assignLoadingStatus(true));
      const { data } = await api.get<TUserData>(APIRoute.Login);
      dispatch(assignAuthStatus(AuthorizationStatus.Auth));
      dispatch(assignUser(data));
    } catch (error) {
      dispatch(assignAuthStatus(AuthorizationStatus.NoAuth));
    } finally {
      dispatch(assignLoadingStatus(true));
    }
  },
);

const getOffers = createAsyncThunk<void, undefined, {
  dispatch: TAppDispatch;
  state: TState;
  extra: AxiosInstance;
}>(
  `${NameSpace.Data}/fetchOffers`,
  async (_arg, { dispatch, extra: api }) => {
    dispatch(assignLoadingStatus(true));
    const { data } = await api.get<TOffersPreview>(APIRoute.Offers);
    dispatch(assignLoadingStatus(false));
    dispatch(assignOffers(data));
  },
);

const getOffer = createAsyncThunk<void, OfferId, {
  dispatch: TAppDispatch;
  state: TState;
  extra: AxiosInstance;
}>(
  `${NameSpace.Data}/fetchOffer`,
  async (offerId, { dispatch, extra: api }) => {
    const route = replaceOfferId(APIRoute.Offer, offerId);
    dispatch(assignLoadingStatus(true));
    const { data } = await api.get<TOffer>(route);
    dispatch(assignLoadingStatus(false));
    dispatch(assignOffer(data));
  },
);

const getNearbyPlaces = createAsyncThunk<void, OfferId, {
  dispatch: TAppDispatch;
  state: TState;
  extra: AxiosInstance;
}>(
  `${NameSpace.Data}/fetchNearPlaces`,
  async (offerId, { dispatch, extra: api }) => {
    const route = replaceOfferId(APIRoute.Nearby, offerId);
    dispatch(assignLoadingStatus(true));
    const { data } = await api.get<TOffersPreview>(route);
    dispatch(assignLoadingStatus(false));
    dispatch(assignNearPlaces(data));
  },
);

const getReviews = createAsyncThunk<void, OfferId, {
  dispatch: TAppDispatch;
  state: TState;
  extra: AxiosInstance;
}>(
  `${NameSpace.Data}/fetchReviews`,
  async (offerId, { dispatch, extra: api }) => {
    const route = replaceOfferId(APIRoute.Review, offerId);
    dispatch(assignLoadingStatus(true));
    const { data } = await api.get<TReviews>(route);
    dispatch(assignLoadingStatus(false));
    dispatch(assignReviews(data));
  },
);

const getOFavorites = createAsyncThunk<void, undefined, {
  dispatch: TAppDispatch;
  state: TState;
  extra: AxiosInstance;
}>(
  `${NameSpace.Data}/fetchFavorites`,
  async (_arg, { dispatch, extra: api }) => {
    dispatch(assignLoadingStatus(true));
    const { data } = await api.get<TOffersPreview>(APIRoute.Favorite);
    dispatch(assignLoadingStatus(false));
    dispatch(assignFavorites(data));
  },
);

const postAuth = createAsyncThunk<void, TAuthData, {
  dispatch: TAppDispatch;
  state: TState;
  extra: AxiosInstance;
}>(
  `${NameSpace.Data}/fetchLogin`,
  async ({ login: email, password }, { dispatch, extra: api }) => {
    try {
      dispatch(assignLoadingStatus(true));
      const { data } = await api.post<TUserData>(APIRoute.Login, { email, password });
      saveToken(data.token);
      dispatch(assignAuthStatus(AuthorizationStatus.Auth));
      dispatch(assignUser(data));
    } catch (error) {
      dispatch(assignAuthStatus(AuthorizationStatus.NoAuth));
    } finally {
      dispatch(assignLoadingStatus(false));
    }
  },
);

const deleteAuth = createAsyncThunk<void, undefined, {
  dispatch: TAppDispatch;
  state: TState;
  extra: AxiosInstance;
}>(
  `${NameSpace.Data}/fetchLogout`,
  async (_arg, { dispatch, extra: api }) => {
    try {
      dispatch(assignLoadingStatus(true));
      await api.delete(APIRoute.Logout);
      dropToken();
      dispatch(assignEmptyUser());
      dispatch(assignAuthStatus(AuthorizationStatus.NoAuth));
    } finally {
      dispatch(assignLoadingStatus(false));
    }
  }
);

const postReview = createAsyncThunk<void, TReviewData, {
  dispatch: TAppDispatch;
  state: TState;
  extra: AxiosInstance;
}>(
  `${NameSpace.Data}/fetchReview`,
  async ({ id: offerId, rating, comment }, { dispatch, extra: api }) => {
    try {
      const route = replaceOfferId(APIRoute.Review, offerId);
      dispatch(assignLoadingStatus(true));
      await api.post(route, { rating, comment });
      dispatch(getReviews(offerId));
    } catch (error) {
      if (error instanceof Error) {
        toast.warn(error.message);
      }
    } finally {
      dispatch(assignLoadingStatus(false));
    }
  },
);

export { getOffers, getAuth, getOffer, getNearbyPlaces, getReviews, getOFavorites, postAuth, deleteAuth, postReview };

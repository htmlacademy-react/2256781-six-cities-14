import { createReducer } from '@reduxjs/toolkit';
import { TOffer, TCityName, TReviews, TOffersPreview, TUserData } from '../types';
import { getActiveCityByDefault } from '../utils';
import { assignActiveCity, assignAuthStatus, assignEmptyOffer, assignFavorites, assignLoadingStatus, assignNearPlaces, assignOffer, assignOffers, assignReviews, assignUser } from '.';
import { AuthorizationStatus } from '../const';

type InitialState = {
  city: TCityName;
  offers: TOffersPreview;
  offer: TOffer | null;
  isDataLoading: boolean;
  nearPlaces: TOffersPreview;
  reviews: TReviews;
  favorites: TOffersPreview;
  authorizationStatus: AuthorizationStatus;
  user: TUserData | null;
};

const initialState: InitialState = {
  city: getActiveCityByDefault(),
  offers: [],
  offer: null,
  isDataLoading: false,
  nearPlaces: [],
  reviews: [],
  favorites: [],
  authorizationStatus: AuthorizationStatus.Unknown,
  user: null,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(assignActiveCity, (state, { payload }) => {
      state.city = payload;
    })
    .addCase(assignOffers, (state, { payload }) => {
      state.offers = payload;
    })
    .addCase(assignOffer, (state, { payload }) => {
      state.offer = payload;
    })
    .addCase(assignLoadingStatus, (state, { payload }) => {
      state.isDataLoading = payload;
    })
    .addCase(assignNearPlaces, (state, { payload }) => {
      state.nearPlaces = payload;
    })
    .addCase(assignReviews, (state, { payload }) => {
      state.reviews = payload;
    })
    .addCase(assignFavorites, (state, { payload }) => {
      state.favorites = payload;
    })
    .addCase(assignAuthStatus, (state, { payload }) => {
      state.authorizationStatus = payload;
    })
    .addCase(assignUser, (state, { payload }) => {
      state.user = payload;
    })
    .addCase(assignEmptyOffer, (state) => {
      state.offer = null;
      state.nearPlaces = [];
    });
});

export { reducer };

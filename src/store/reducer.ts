import { createReducer } from '@reduxjs/toolkit';
import { TOffer, TCityName, TReviews, TOffersPreview } from '../types';
import { offers } from '../mocks/offers';
import { getActiveCityByDefault } from '../utils/utils';
import { dropOfferAction, fetchFavoritesAction, fetchNearPlacesAction, fetchOfferAction, fetchOffersAction, fetchReviewsAction, requireAuthorizationAction, setActiveCityAction, setErrorAction } from '.';
import { getOffer } from '../mocks/offer';
import { getRandomReview } from '../mocks/reviews';
import { AuthorizationStatus } from '../const';

type InitialState = {
  offers: TOffersPreview;
  nearPlaces: TOffersPreview;
  reviews: TReviews;
  offer: TOffer | null;
  favorites: TOffersPreview;
  city: TCityName;
  error: string | null;
  authorizationStatus: AuthorizationStatus;
};

const activeCity = getActiveCityByDefault();
const offer = getOffer();
const reviews = getRandomReview();

const initialState: InitialState = {
  offers,
  nearPlaces: [],
  reviews: [],
  offer: null,
  favorites: [],
  city: activeCity,
  error: null,
  authorizationStatus: AuthorizationStatus.Unknown,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(fetchOffersAction, (state) => {
      state.offers = offers;
      state.nearPlaces = [];
      state.reviews = [];
    })
    .addCase(fetchOfferAction, (state) => {
      state.offer = offer ?? null;
    })
    .addCase(fetchNearPlacesAction, (state, { payload }) => {
      state.nearPlaces = offers.filter(({ id }) => id !== payload);
    })
    .addCase(fetchReviewsAction, (state) => {
      state.reviews = reviews;
    })
    .addCase(dropOfferAction, (state) => {
      state.offer = null;
      state.nearPlaces = [];
    })
    .addCase(setActiveCityAction, (state, { payload }) => {
      state.city = payload;
    })
    .addCase(fetchFavoritesAction, (state) => {
      state.favorites = state.offers.filter(({ isFavorite }) => isFavorite);
    })
    .addCase(setErrorAction, (state, { payload }) => {
      state.error = payload;
    })
    .addCase(requireAuthorizationAction, (state, { payload }) => {
      state.authorizationStatus = payload;
    });
});

export { reducer };

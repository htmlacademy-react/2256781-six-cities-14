import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../const';
import { TReview, TReviews } from '../../types/review';
import { TOffer, TOfferPreview, TOffersPreview } from '../../types';
import { getAsyncNearbyPlaces, getAsyncOffer, getAsyncReviews, postAsyncReview } from '..';

type TOfferData = {
  isOfferLoading: boolean;
  offer: TOffer | null;
  nearbyPlaces: TOffersPreview;
  reviews: TReviews;
  review: TReview | null;
};

const initialState: TOfferData = {
  isOfferLoading: false,
  offer: null,
  nearbyPlaces: [],
  reviews: [],
  review: null,
};

const offerData = createSlice({
  name: NameSpace.Offer,
  initialState,
  reducers: {
    assignEmptyOffer: (state) => {
      state.offer = null;
      state.nearbyPlaces = [];
    },
    updateOffer: (state, action: PayloadAction<TOfferPreview>) => {
      if (state.offer !== null) {
        state.offer.isFavorite = action.payload.isFavorite;
      }
    },
  },
  extraReducers(builder) {
    builder
      .addCase(getAsyncOffer.pending, (state) => {
        state.isOfferLoading = true;
      })
      .addCase(getAsyncOffer.fulfilled, (state, action) => {
        state.isOfferLoading = false;
        state.offer = action.payload;
      })
      .addCase(getAsyncOffer.rejected, (state) => {
        state.isOfferLoading = false;
      })
      .addCase(getAsyncNearbyPlaces.fulfilled, (state, action) => {
        state.nearbyPlaces = action.payload;
      })
      .addCase(getAsyncReviews.fulfilled, (state, action) => {
        state.reviews = action.payload;
      })
      .addCase(postAsyncReview.fulfilled, (state, action) => {
        state.review = action.payload;
      });
  }
});

const { assignEmptyOffer, updateOffer } = offerData.actions;

export { offerData, assignEmptyOffer, updateOffer };

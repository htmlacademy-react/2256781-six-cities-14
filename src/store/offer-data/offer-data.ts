import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { NameSpace, RequestStatus } from '../../const';
import { TReviews } from '../../types/review';
import { TOffer, TOfferPreview, TOffersPreview } from '../../types';
import { getAsyncNearbyPlaces, getAsyncOffer, getAsyncReviews, postAsyncReview } from '..';

type TOfferData = {
  isOfferLoading: boolean;
  offer: TOffer | null;
  nearbyPlaces: TOffersPreview;
  reviews: TReviews;
  reviewRequestStatus: RequestStatus;
};

const initialState: TOfferData = {
  isOfferLoading: false,
  offer: null,
  nearbyPlaces: [],
  reviews: [],
  reviewRequestStatus: RequestStatus.Idle,
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
    updateNearbyPlaces: (state, action: PayloadAction<TOfferPreview>) => {
      state.nearbyPlaces.find((offer) => {
        if (offer.id === action.payload.id) {
          offer.isFavorite = action.payload.isFavorite;
        }
      });
    },
    assignReviewRequestStatusByDefault: (state) => {
      state.reviewRequestStatus = RequestStatus.Idle;
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
      }).addCase(postAsyncReview.pending, (state) => {
        state.reviewRequestStatus = RequestStatus.Pending;
      })
      .addCase(postAsyncReview.fulfilled, (state, action) => {
        state.reviewRequestStatus = RequestStatus.Success;
        state.reviews.push(action.payload);
      })
      .addCase(postAsyncReview.rejected, (state) => {
        state.reviewRequestStatus = RequestStatus.Error;
      });
  }
});

const { assignEmptyOffer, updateOffer, updateNearbyPlaces, assignReviewRequestStatusByDefault } = offerData.actions;

export { offerData, assignEmptyOffer, updateOffer, updateNearbyPlaces, assignReviewRequestStatusByDefault, type TOfferData };

import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { TOfferPreview, TOffersPreview } from '../../types';
import { NameSpace } from '../../const';
import { getAsyncOffers } from '..';

type TOffersData = {
  offers: TOffersPreview;
  isOffersLoading: boolean;
};

const initialState: TOffersData = {
  offers: [],
  isOffersLoading: false,
};

const offersData = createSlice({
  name: NameSpace.Offers,
  initialState,
  reducers: {
    updateOffers: (state, action: PayloadAction<TOfferPreview>) => {
      state.offers.find((offer) => {
        if (offer.id === action.payload.id) {
          offer.isFavorite = action.payload.isFavorite;
        }
      });
    },
  },
  extraReducers(builder) {
    builder
      .addCase(getAsyncOffers.pending, (state) => {
        state.isOffersLoading = true;
      })
      .addCase(getAsyncOffers.rejected, (state) => {
        state.isOffersLoading = false;
      })
      .addCase(getAsyncOffers.fulfilled, (state, action) => {
        state.isOffersLoading = false;
        state.offers = action.payload;
      });
  }
});

const { updateOffers } = offersData.actions;

export { offersData, updateOffers, type TOffersData };

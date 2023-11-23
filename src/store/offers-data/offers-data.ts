import { createSlice } from '@reduxjs/toolkit';
import { TOffersPreview } from '../../types';
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
  reducers: {},
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

export { offersData };

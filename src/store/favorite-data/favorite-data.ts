import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../const';
import { TOffersPreview } from '../../types';
import { getAsyncFavorites } from '..';

export type TFavoritesData = {
  favorites: TOffersPreview;
  isOk: boolean | null;
};

const initialState: TFavoritesData = {
  favorites: [],
  isOk: null,
};

const favoriteData = createSlice({
  name: NameSpace.Favorite,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getAsyncFavorites.pending, (state) => {
        state.isOk = null;
      })
      .addCase(getAsyncFavorites.fulfilled, (state, action) => {
        state.isOk = true;
        state.favorites = action.payload;
      })
      .addCase(getAsyncFavorites.rejected, (state) => {
        state.isOk = false;
      });
  },
});

export { favoriteData };

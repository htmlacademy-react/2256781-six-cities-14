import { createSelector } from '@reduxjs/toolkit';
import { NameSpace } from '../../const';
import { TOffersPreview, TState } from '../../types';

const selectFavorites = (state: TState): TOffersPreview =>
  state[NameSpace.Favorite].favorites;

const selectFavoritesCount = (state: TState): number =>
  state[NameSpace.Favorite].favorites.length;

const selectIsDataFavoritesOk = (state: TState): boolean | null =>
  state[NameSpace.Favorite].favoritesStatus.status;

const selectCitiesFromFavoritesMemo = createSelector(
  [selectFavorites],
  (favorites) => [...new Set(favorites.map((offer) => offer.city.name))]
);

const selectIsEmptyFavorites = (state: TState) => !state[NameSpace.Favorite].favorites.length;

export { selectFavorites, selectFavoritesCount, selectIsDataFavoritesOk, selectCitiesFromFavoritesMemo, selectIsEmptyFavorites };

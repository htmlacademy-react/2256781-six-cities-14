import { createSelector } from '@reduxjs/toolkit';
import { NameSpace } from '../../const';
import { TOffersPreview, TState } from '../../types';

const selectFavorites = (state: TState): TOffersPreview =>
  state[NameSpace.Favorite].favorites;

const selectFavoritesCount = (state: TState): number =>
  state[NameSpace.Favorite].favorites.length;

const selectIsOk = (state: TState): boolean | null =>
  state[NameSpace.Favorite].isOk;

const selectCitiesFromFavoritesMemo = createSelector(
  [selectFavorites],
  (favorites) => [...new Set(favorites.map((offer) => offer.city.name))]
);

export { selectFavorites, selectFavoritesCount, selectIsOk, selectCitiesFromFavoritesMemo };

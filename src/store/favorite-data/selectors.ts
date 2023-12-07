import { createSelector } from '@reduxjs/toolkit';
import { NameSpace } from '../../const';
import { TOffersPreview, TState } from '../../types';

const selectFavorites = (state: Pick<TState, NameSpace.Favorite>): TOffersPreview =>
  state[NameSpace.Favorite].favorites;

const selectFavoritesCount = (state: Pick<TState, NameSpace.Favorite>): number =>
  state[NameSpace.Favorite].favorites.length;

const selectCitiesFromFavoritesMemo = createSelector(
  [selectFavorites],
  (favorites) => [...new Set(favorites.map((offer) => offer.city.name))]
);

const selectIsEmptyFavorites = (state: Pick<TState, NameSpace.Favorite>) => !state[NameSpace.Favorite].favorites.length;


export { selectFavorites, selectFavoritesCount, selectCitiesFromFavoritesMemo, selectIsEmptyFavorites };

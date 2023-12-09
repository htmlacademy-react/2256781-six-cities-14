import { createSelector } from '@reduxjs/toolkit';
import { NameSpace } from '../../const';
import { TState } from '../../types/state';
import { selectCity, selectSorting } from '..';
import { getOffersByCity, sorting } from '../../utils';

const selectOffers = (state: Pick<TState, NameSpace.Offers>) => state[NameSpace.Offers].offers;

const selectIsOffersLoading = (state: Pick<TState, NameSpace.Offers>) => state[NameSpace.Offers].isOffersLoading;

const selectOffersMemo = createSelector(
  [selectCity, selectSorting, selectOffers],
  (city, activeSorting, offers) => sorting[activeSorting](getOffersByCity(offers, city))
);

const selectIsEmptyOffers = (state: Pick<TState, NameSpace.Offers>) => !state[NameSpace.Offers].offers.length;

export { selectIsOffersLoading, selectOffersMemo, selectIsEmptyOffers, selectOffers };

import { NameSpace } from '../../const';
import { TOffer, TOffersPreview } from '../../types';
import { TReviews } from '../../types/review';
import { TState } from '../../types/state';

const selectOffer = (state: TState): TOffer | null => state[NameSpace.Offer].offer;

const selectNearbyPlaces = (state: TState): TOffersPreview => state[NameSpace.Offer].nearbyPlaces;

const selectIsOfferLoading = (state: TState): boolean => state[NameSpace.Offer].isOfferLoading;

const selectReviews = (state: TState): TReviews => state[NameSpace.Offer].reviews;

export { selectOffer, selectNearbyPlaces, selectIsOfferLoading, selectReviews };

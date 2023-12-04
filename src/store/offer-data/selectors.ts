import { MAX_COUNT_REVIEWS, NameSpace, RequestStatus } from '../../const';
import { TOffer, TOffersPreview } from '../../types';
import { TReview, TReviews } from '../../types/review';
import { TState } from '../../types/state';

const selectOffer = (state: TState): TOffer | null => state[NameSpace.Offer].offer;

const selectNearbyPlaces = (state: TState): TOffersPreview => state[NameSpace.Offer].nearbyPlaces;

const selectIsOfferLoading = (state: TState): boolean => state[NameSpace.Offer].isOfferLoading;

const selectReviews = (state: TState): TReviews => state[NameSpace.Offer].reviews.toSorted(
  ({ date: dateOne }: TReview, { date: dateTwo }: TReview): number =>
    new Date(dateTwo).getTime() - new Date(dateOne).getTime()
)
  .slice(0, MAX_COUNT_REVIEWS);

const selectNumberReviews = (state: TState): number => state[NameSpace.Offer].reviews.length;

const selectReviewRequestStatus = (state: TState): RequestStatus => state[NameSpace.Offer].reviewRequestStatus;

export { selectOffer, selectNearbyPlaces, selectIsOfferLoading, selectReviews, selectNumberReviews, selectReviewRequestStatus };

import { MAX_COUNT_REVIEWS, NameSpace, RequestStatus } from '../../const';
import { TOffer, TOffersPreview } from '../../types';
import { TReview, TReviews } from '../../types/review';
import { TState } from '../../types/state';

const selectOffer = (state: Pick<TState, NameSpace.Offer>): TOffer | null => state[NameSpace.Offer].offer;

const selectNearbyPlaces = (state: Pick<TState, NameSpace.Offer>): TOffersPreview => state[NameSpace.Offer].nearbyPlaces;

const selectReviews = (state: Pick<TState, NameSpace.Offer>): TReviews => state[NameSpace.Offer].reviews.toSorted(
  ({ date: dateOne }: TReview, { date: dateTwo }: TReview): number =>
    new Date(dateTwo).getTime() - new Date(dateOne).getTime()
)
  .slice(0, MAX_COUNT_REVIEWS);

const selectNumberReviews = (state: Pick<TState, NameSpace.Offer>): number => state[NameSpace.Offer].reviews.length;

const selectReviewRequestStatus = (state: Pick<TState, NameSpace.Offer>): RequestStatus => state[NameSpace.Offer].reviewRequestStatus;

export { selectOffer, selectNearbyPlaces, selectReviews, selectNumberReviews, selectReviewRequestStatus };

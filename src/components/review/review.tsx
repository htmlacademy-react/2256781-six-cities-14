import { TOfferId, TReviews } from '../../types';
import { ReviewForm } from '../../components';
import { ReviewItem } from '../../components';
import { AuthorizationStatus } from '../../const';

type TReviewProps = {
  offerId: TOfferId;
  reviews: TReviews;
  authStatus: AuthorizationStatus;
};

function Review({ reviews, offerId, authStatus }: TReviewProps): JSX.Element {
  const countReview = reviews.length;

  return (
    <section className="offer__reviews reviews">
      {
        <>
          <h2 className="reviews__title">
            Reviews &middot;{' '}
            <span className="reviews__amount">{countReview}</span>
          </h2>

          <ul className="reviews__list">
            {reviews.map((review) => (
              <ReviewItem key={review.id} review={review} />
            ))}
          </ul>
          {authStatus === AuthorizationStatus.Auth && (
            <ReviewForm offerId={offerId} />
          )}
        </>
      }
    </section>
  );
}

export { Review };

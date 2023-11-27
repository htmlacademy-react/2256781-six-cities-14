import { TReviews } from '../../types';
import { ReviewForm } from '../../components';
import { ReviewItem } from '../../components';

type TReviewProps = {
  reviews: TReviews;
};

function Review({ reviews }: TReviewProps): JSX.Element {
  const countReview = reviews.length;
  const isEmptyReviews = !reviews.length;

  return (
    <section className="offer__reviews reviews">
      {isEmptyReviews && <ReviewForm />}

      {!isEmptyReviews && (
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
          <ReviewForm />
        </>
      )}
    </section>
  );
}

export { Review };

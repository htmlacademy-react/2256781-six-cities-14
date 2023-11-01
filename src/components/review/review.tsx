import { ReviewForm } from '../../components';
import { TReviews } from '../../types';
import { ReviewItem } from '../../components';

type TReviewProps = {
  reviews: TReviews | undefined;
};

function Review({ reviews }: TReviewProps): JSX.Element {
  const countReview = reviews?.length;

  return (
    <section className="offer__reviews reviews">
      {countReview && (
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
        </>
      )}

      <ReviewForm />
    </section>
  );
}

export { Review };

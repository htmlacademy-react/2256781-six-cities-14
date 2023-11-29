import { FormEvent, memo, useCallback, useState } from 'react';
import { RATING_STARS } from '../../const';
import { RatingForm } from '../../components';
import { useAppDispatch } from '../../hooks';
import { TOfferId, TReviewData } from '../../types';
import { postAsyncReview } from '../../store';

type TReviewFormProps = {
  offerId: TOfferId;
};

const RatingFormMemo = memo(RatingForm);
const MIN_COUNT_CHARACTERS = 50;
const validateText = (text: string): boolean =>
  text.length >= MIN_COUNT_CHARACTERS;

function ReviewForm({ offerId }: TReviewFormProps): JSX.Element {
  const [isSubmitButtonOk, setIsSubmitButtonOk] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [comment, setComment] = useState<string>('');
  const [rating, setRating] = useState<number>(0);
  const dispatch = useAppDispatch();

  const resetFormStatus = () => {
    setComment('');
    setRating(0);
    setIsSubmitButtonOk(false);
    setIsLoading(false);
  };

  const handleTextChange = (evt: React.ChangeEvent<HTMLTextAreaElement>) => {
    setComment(evt.target.value);

    if (validateText(evt.target.value)) {
      setIsSubmitButtonOk(true);
    } else {
      setIsSubmitButtonOk(false);
    }
  };

  const handleRatingChange = useCallback((count: number) => {
    setRating(count);
  }, []);

  const handleFormSubmit = (evt: FormEvent) => {
    evt.preventDefault();
    const review: TReviewData = { id: offerId, comment, rating };
    setIsLoading(true);
    dispatch(postAsyncReview(review));
    resetFormStatus();
  };

  return (
    <form
      onSubmit={handleFormSubmit}
      className="reviews__form form"
      action="#"
      method="post"
    >
      <label className="reviews__label form__label" htmlFor="review">
        Your review
      </label>
      <div className="reviews__rating-form form__rating" data-rating={rating}>
        <RatingFormMemo
          rating={rating}
          ratings={RATING_STARS}
          onRatingChange={handleRatingChange}
        />
      </div>
      <textarea
        className="reviews__textarea form__textarea"
        id="review"
        name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        onChange={handleTextChange}
        value={comment}
        required
      />
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set{' '}
          <span className="reviews__star">rating</span> and describe your stay
          with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button
          className="reviews__submit form__submit button"
          type="submit"
          disabled={!isSubmitButtonOk}
        >
          {isLoading ? 'Sending...' : 'Submit'}
        </button>
      </div>
    </form>
  );
}

export { ReviewForm };

import { ChangeEvent, FormEvent, Fragment, useEffect, useState } from 'react';
import { RATING_STARS, RequestStatus } from '../../const';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { TOfferId, TReviewData } from '../../types';
import {
  assignReviewRequestStatusByDefault,
  postAsyncReview,
  selectReviewRequestStatus,
} from '../../store';
import { toast } from 'react-toastify';

type TReviewFormProps = {
  offerId: TOfferId;
};

const MIN_COUNT_CHARACTERS = 50;
const MAX_COUNT_CHARACTERS = 300;
const validateText = (text: string): boolean =>
  text.length >= MIN_COUNT_CHARACTERS && text.length < MAX_COUNT_CHARACTERS;

function ReviewForm({ offerId }: TReviewFormProps): JSX.Element {
  const [isCorrectUserInput, setIsCorrectUserInput] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [comment, setComment] = useState<string>('');
  const [rating, setRating] = useState<number>(0);
  const reviewRequestStatus = useAppSelector(selectReviewRequestStatus);
  const dispatch = useAppDispatch();

  useEffect(() => {
    switch (reviewRequestStatus) {
      case RequestStatus.Success:
        setComment('');
        setRating(0);
        setIsCorrectUserInput(false);
        dispatch(assignReviewRequestStatusByDefault());
        break;
      case RequestStatus.Pending:
        setIsLoading(true);
        break;
      case RequestStatus.Error:
        toast.warn('Error sending a comment', {
          position: toast.POSITION.TOP_CENTER,
        });
        setIsLoading(false);
        break;
      default:
        setIsLoading(false);
    }
  }, [reviewRequestStatus, dispatch]);

  const handleTextChange = (evt: React.ChangeEvent<HTMLTextAreaElement>) => {
    setComment(evt.target.value);

    if (validateText(evt.target.value)) {
      setIsCorrectUserInput(true);
    } else {
      setIsCorrectUserInput(false);
    }
  };

  const handleRatingChange = (evt: ChangeEvent<HTMLInputElement>) => {
    setRating(Number(evt.target.value));
  };

  const handleFormSubmit = (evt: FormEvent) => {
    evt.preventDefault();
    const review: TReviewData = { id: offerId, comment, rating };
    dispatch(postAsyncReview(review));
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
        {RATING_STARS.map((title, index) => ({ title, score: ++index }))
          .toReversed()
          .map(({ title, score }) => (
            <Fragment key={score}>
              <input
                className="form__rating-input visually-hidden"
                name="rating"
                value={score}
                id={`${score}-stars`}
                type="radio"
                checked={rating === score}
                disabled={isLoading}
                onChange={handleRatingChange}
              />
              <label
                htmlFor={`${score}-stars`}
                className="reviews__rating-label form__rating-label"
                title={title}
              >
                <svg className="form__star-image" width="37" height="33">
                  <use xlinkHref="#icon-star"></use>
                </svg>
              </label>
            </Fragment>
          ))}
      </div>
      <textarea
        className="reviews__textarea form__textarea"
        id="review"
        name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        onChange={handleTextChange}
        value={comment}
        disabled={isLoading}
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
          disabled={!isCorrectUserInput || isLoading}
        >
          {isLoading ? 'Sending...' : 'Submit'}
        </button>
      </div>
    </form>
  );
}

export { ReviewForm };

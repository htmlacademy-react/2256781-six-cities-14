import React from 'react';
import { RATING_STARS } from '../../const';

type TRatingFormProps = {
  rating?: number;
  ratings: typeof RATING_STARS;
  disabled: boolean;
  onRatingChange: (rating: number) => void;
};

function RatingForm({
  rating = 0,
  ratings,
  disabled,
  onRatingChange,
}: TRatingFormProps): JSX.Element {
  function handleInputChange(count: number): void {
    onRatingChange(count);
  }

  function getRatingForm() {
    return ratings
      .map((score, index) => ({ score, count: ++index }))
      .toReversed()
      .map((item) => (
        <React.Fragment key={item.count}>
          <input
            className="form__rating-input visually-hidden"
            name="rating"
            value={item.count}
            id={`${item.count}-stars`}
            type="radio"
            onChange={() => handleInputChange(item.count)}
            checked={item.count === rating}
            disabled={disabled}
          />
          <label
            htmlFor={`${item.count}-stars`}
            className="reviews__rating-label form__rating-label"
            title={item.score}
          >
            <svg className="form__star-image" width={37} height={33}>
              <use xlinkHref="#icon-star"></use>
            </svg>
          </label>
        </React.Fragment>
      ));
  }

  return <React.Fragment>{getRatingForm()}</React.Fragment>;
}

export { RatingForm };

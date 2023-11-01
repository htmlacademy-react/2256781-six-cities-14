import React from 'react';
import { RATING_STARS } from '../../const';

type TRatingFormProps = {
  ratings: typeof RATING_STARS;
  onRatingChange: (rating: number) => void;
};

function RatingForm({
  ratings,
  onRatingChange,
}: TRatingFormProps): JSX.Element {
  function handleInputChange(count: number): void {
    onRatingChange(count);
  }

  function getRatingForm() {
    return ratings
      .map((rating, index) => ({ rating, count: ++index }))
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
          />
          <label
            htmlFor={`${item.count}-stars`}
            className="reviews__rating-label form__rating-label"
            title={item.rating}
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

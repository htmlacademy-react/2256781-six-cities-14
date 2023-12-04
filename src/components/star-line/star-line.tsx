import { StarType } from '../../const';
import { calculateRating } from '../../utils';

type TStarProps = {
  type?: StarType;
  rating: number;
};

function StarLine({ type = StarType.Card, rating }: TStarProps): JSX.Element {
  return (
    <div className={`${type}__rating rating`} data-testid="starline-container">
      <div className={`${type}__stars rating__stars`}>
        <span style={{ width: calculateRating(rating) }} data-testid="calculated-rating"></span>
        <span className="visually-hidden">Rating</span>
      </div>
      {type && type === StarType.Offer && (
        <span className="offer__rating-value rating__value" data-testid="offer-rating">{rating}</span>
      )}
    </div>
  );
}

export { StarLine };

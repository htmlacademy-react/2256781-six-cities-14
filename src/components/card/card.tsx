import { Link } from 'react-router-dom';
import { TOffer } from '../../types';
import { AppRoute, MAX_RATING } from '../../const';

type TCardProps = {
  offer: TOffer;
  mouseOverHandler: (offer: TOffer | null) => void;
};

function getRating(rating: number): string {
  return `${(rating * 100) / MAX_RATING}%`;
}

function Card({ offer, mouseOverHandler }: TCardProps): JSX.Element {
  const { isPremium, previewImage, price, rating, title, type } = offer;

  return (
    <article
      className="cities__card place-card"
      onMouseOver={() => mouseOverHandler(offer)}
      onMouseLeave={() => mouseOverHandler(null)}
    >
      {isPremium ? (
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
      ) : null}

      <div className="cities__image-wrapper place-card__image-wrapper">
        <Link to={AppRoute.Main}>
          <img
            className="place-card__image"
            src={previewImage}
            width={260}
            height={200}
            alt={title}
          />
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className="place-card__bookmark-button button" type="button">
            <svg className="place-card__bookmark-icon" width={18} height={19}>
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{ width: getRating(rating) }}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={AppRoute.Main}>{title}</Link>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
}

export { Card };
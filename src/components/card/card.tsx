import { Link } from 'react-router-dom';
import { TCustomizationCard, TOffer } from '../../types';
import { AppRoute, TYPE_CARD, MarkType } from '../../const';
import { Premium, StarLine } from '..';

type TCardProps = {
  offer: TOffer;
  type?: TCustomizationCard;
  onCardHover?(offer: TOffer): void;
  onCardLeave?(): void;
};

function Card({
  offer,
  onCardHover,
  onCardLeave,
  type = TYPE_CARD.CITY,
}: TCardProps): JSX.Element {
  const {
    id,
    isPremium,
    previewImage,
    price,
    rating,
    title,
    type: offerType,
  } = offer;
  const {
    className: cardClassName,
    width: cardWidth,
    height: cardHeight,
    buttonFavorite,
  } = type;
  const { className: btnFavClassName, span: btnFavSpan } = buttonFavorite;
  const path = `${AppRoute.Offer}${id}`;

  return (
    <article
      className={cardClassName}
      onMouseEnter={() => onCardHover?.(offer)}
      onMouseLeave={()=> onCardLeave?.()}
    >
      <Premium isPremium={isPremium} mark={MarkType.Card} />

      <div className="cities__image-wrapper place-card__image-wrapper">
        <Link to={path}>
          <img
            className="place-card__image"
            src={previewImage}
            width={cardWidth}
            height={cardHeight}
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
          <button className={btnFavClassName} type="button">
            <svg className="place-card__bookmark-icon" width={18} height={19}>
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">{btnFavSpan}</span>
          </button>
        </div>

        <StarLine rating={rating} />

        <h2 className="place-card__name">
          <Link to={path}>{title}</Link>
        </h2>

        <p className="place-card__type">{offerType}</p>
      </div>
    </article>
  );
}

export { Card };

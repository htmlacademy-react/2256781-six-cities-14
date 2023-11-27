import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { TCustomizationCard, TOfferPreview } from '../../types';
import { AppRoute, TYPE_CARD, MarkType } from '../../const';
import { Bookmark, Premium, StarLine } from '..';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { postAsyncFavorite, selectIsAuthStatus } from '../../store';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

type TCardProps = {
  offer: TOfferPreview;
  type?: TCustomizationCard;
  onCardHover?(offer: TOfferPreview): void;
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
    isFavorite,
  } = offer;
  const {
    className: cardClassName,
    width: cardWidth,
    height: cardHeight,
    mark,
  } = type;
  const {
    className: markClassName,
    classNameActive: markClassNameActive,
    image: markImage,
  } = mark;
  const { className: markImageClassName } = markImage;
  const path = `${AppRoute.Offer}${id}`;
  const isAuth = useAppSelector(selectIsAuthStatus);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const handleFavoriteChange = () => {
    if (isAuth) {
      dispatch(postAsyncFavorite({ offerId: id, status: Number(!isFavorite) }));
    } else {
      navigate(AppRoute.Login);
    }
  };

  return (
    <article
      className={cardClassName}
      onMouseEnter={() => onCardHover?.(offer)}
      onMouseLeave={() => onCardLeave?.()}
    >
      <div className="cities__image-wrapper place-card__image-wrapper">
        <Link to={path}>
          <LazyLoadImage
            className="place-card__image"
            src={previewImage}
            width={cardWidth}
            height={cardHeight}
            alt={title}
            effect="blur"
          />
        </Link>
      </div>

      <Premium isPremium={isPremium} mark={MarkType.Card} />

      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <Bookmark
            actionClass={isFavorite ? markClassNameActive : markClassName}
            enabled={isFavorite}
            imageClass={markImageClassName}
            onMarkChange={handleFavoriteChange}
          />
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

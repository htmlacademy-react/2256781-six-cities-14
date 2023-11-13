import {
  GoodList,
  Map,
  OfferGallery,
  Premium,
  Review,
  StarLine,
} from '../../components';
import { MarkType, MapType, StarType } from '../../const';
import { useAppSelector } from '../../hooks';
import { TOffer } from '../../types';
import { getStringSuperscript } from '../../utils/common';

type TOfferProps = {
  offer: TOffer;
};

function Offer({ offer }: TOfferProps): JSX.Element {
  const reviews = useAppSelector((state) => state.reviews);
  const {
    isPremium,
    title,
    type,
    bedrooms,
    maxAdults,
    price,
    goods,
    host,
    description,
    rating,
  } = offer;
  const { avatarUrl, name, isPro } = host;

  return (
    <section className="offer">
      <div className="offer__gallery-container container">
        <OfferGallery offer={offer} />
      </div>
      <div className="offer__container container">
        <div className="offer__wrapper">
          <Premium isPremium={isPremium} mark={MarkType.Offer} />

          <div className="offer__name-wrapper">
            <h1 className="offer__name">{title}</h1>
            <button className="offer__bookmark-button button" type="button">
              <svg className="offer__bookmark-icon" width={31} height={33}>
                <use xlinkHref="#icon-bookmark"></use>
              </svg>
              <span className="visually-hidden">To bookmarks</span>
            </button>
          </div>

          <StarLine rating={rating} type={StarType.Offer} />

          <ul className="offer__features">
            <li className="offer__feature offer__feature--entire">
              {getStringSuperscript(type)}
            </li>
            <li className="offer__feature offer__feature--bedrooms">
              {`${bedrooms} Bedroom(s)`}
            </li>
            <li className="offer__feature offer__feature--adults">
              {`Max ${maxAdults} adults`}
            </li>
          </ul>

          <div className="offer__price">
            <b className="offer__price-value">&euro;{price}</b>
            <span className="offer__price-text">&nbsp;night</span>
          </div>

          <GoodList goods={goods} />

          <div className="offer__host">
            <h2 className="offer__host-title">Meet the host</h2>
            <div className="offer__host-user user">
              <div className="offer__avatar-wrapper offer__avatar-wrapper--pro user__avatar-wrapper">
                <img
                  className="offer__avatar user__avatar"
                  src={avatarUrl}
                  width={74}
                  height={74}
                  alt="Host avatar"
                />
              </div>
              <span className="offer__user-name">{name}</span>
              {isPro && <span className="offer__user-status">Pro</span>}
            </div>
            <div className="offer__description">
              <p className="offer__text">{description}</p>
            </div>
          </div>

          <Review reviews={reviews} />
        </div>
      </div>

      <Map type={MapType.Offer} activeOffer={offer} />
    </section>
  );
}

export { Offer };

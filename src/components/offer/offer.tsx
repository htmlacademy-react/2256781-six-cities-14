import { MarkType, MapType, StarType, AuthorizationStatus } from '../../const';
import { useAppSelector, useFavoritesMark } from '../../hooks';
import { selectReviews } from '../../store';
import { TOffer, TOffersPreview } from '../../types';
import { getStringSuperscript } from '../../utils/common';
import {
  Bookmark,
  GoodList,
  Map,
  OfferGallery,
  Premium,
  Review,
  StarLine,
} from '../../components';
import { memo, useCallback } from 'react';

type TOfferProps = {
  offer: TOffer;
  authStatus: AuthorizationStatus;
  nearbyPlaces: TOffersPreview;
};

const BookmarkMemo = memo(Bookmark);

function Offer({ offer, authStatus, nearbyPlaces }: TOfferProps): JSX.Element {
  const MAX_REVIEWS_COUNT = 10;
  const reviews = useAppSelector(selectReviews).slice(0, MAX_REVIEWS_COUNT);
  const {
    id,
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
    isFavorite,
  } = offer;
  const changeFavoritesMark = useFavoritesMark(id, isFavorite);
  const { avatarUrl, name, isPro } = host;
  const markedFlagClassName =
    'offer__bookmark-button offer__bookmark-button--active button';
  const unmarkedFlagClassName =
    'offer__bookmark-button offer__bookmark-button button ';
  const imageBookmarkClassName = 'offer__bookmark-icon';
  const widthImageBookmark = '31';
  const heightImageBookmark = '33';
  const hiddenBookmarkDescription = isFavorite
    ? 'In bookmarks'
    : 'To bookmarks';

  const handleFavoriteChange = useCallback(() => {
    changeFavoritesMark();
  }, [changeFavoritesMark]);

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
            <BookmarkMemo
              actionClass={
                isFavorite ? markedFlagClassName : unmarkedFlagClassName
              }
              imageClass={imageBookmarkClassName}
              imageWidth={widthImageBookmark}
              imageHeight={heightImageBookmark}
              hiddenDescription={hiddenBookmarkDescription}
              onMarkChange={handleFavoriteChange}
            />
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

          <Review offerId={id} reviews={reviews} authStatus={authStatus} />
        </div>
      </div>

      <Map type={MapType.Offer} activeOffer={offer} offers={nearbyPlaces} />
    </section>
  );
}

export { Offer };

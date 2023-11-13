import { Link } from 'react-router-dom';
import { AppRoute, TYPE_CARD } from '../../const';
import { Card } from '../../components';
import { getOffersByCity } from '../../utils';
import { TOffersPreview } from '../../types';

type TFavoriteListProps = {
  favorites: TOffersPreview;
};

function FavoriteList({ favorites }: TFavoriteListProps): JSX.Element {
  const cities = [...new Set(favorites.map((offer) => offer?.city?.name))];

  return (
    <ul className="favorites__list">
      {cities.map((city) => (
        <li key={city} className="favorites__locations-items">
          <div className="favorites__locations locations locations--current">
            <div className="locations__item">
              <Link className="locations__item-link" to={AppRoute.Main}>
                <span>{city}</span>
              </Link>
            </div>
          </div>
          <div className="favorites__places">
            {getOffersByCity(favorites, city).map((offer) => (
              <Card key={offer.id} offer={offer} type={TYPE_CARD.FAVORITES} />
            ))}
          </div>
        </li>
      ))}
    </ul>
  );
}

export { FavoriteList };

import { Link } from 'react-router-dom';
import { AppRoute, TYPE_CARD } from '../../const';
import { TOffer } from '../../types';
import { Card } from '../../components';

type TFavoriteListProps = {
  offers: TOffer[];
};

function getOffersByCity(offers: TOffer[], city: string): TOffer[] | [] {
  return offers.filter((offer) => offer?.city?.name === city);
}

function FavoriteList({ offers }: TFavoriteListProps): JSX.Element {
  const cities = [...new Set(offers.map((offer) => offer?.city?.name))];

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
            {getOffersByCity(offers, city).map((offer) => (
              <Card
                key={offer.id}
                offer={offer}
                customization={TYPE_CARD.FAVORITES}
              />
            ))}
          </div>
        </li>
      ))}
    </ul>
  );
}

export { FavoriteList };

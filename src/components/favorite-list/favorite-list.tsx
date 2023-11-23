import { Link } from 'react-router-dom';
import { AppRoute, TYPE_CARD } from '../../const';
import { getOffersByCity } from '../../utils';
import { useAppSelector } from '../../hooks';
import { selectCitiesFromFavoritesMemo, selectFavorites } from '../../store';
import memoize from 'lodash.memoize';
import { TCityName, TOffersPreview } from '../../types';
import { Card } from '../../components';

function FavoriteList(): JSX.Element {
  const cities = useAppSelector(selectCitiesFromFavoritesMemo);
  const favorites = useAppSelector(selectFavorites);
  const getFavoritesByCityMemo = memoize(
    (offers: TOffersPreview, city: TCityName) => getOffersByCity(offers, city)
  );

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
            {getFavoritesByCityMemo(favorites, city).map((offer) => (
              <Card key={offer.id} offer={offer} type={TYPE_CARD.FAVORITES} />
            ))}
          </div>
        </li>
      ))}
    </ul>
  );
}

export { FavoriteList };

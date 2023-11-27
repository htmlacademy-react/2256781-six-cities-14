import { Link } from 'react-router-dom';
import { AppRoute, TYPE_CARD } from '../../const';
import { getOffersByCity } from '../../utils';
import { useAppSelector } from '../../hooks';
import { selectCitiesFromFavoritesMemo, selectFavorites } from '../../store';
import { TCityName, TOffersPreview } from '../../types';
import { Card } from '..';
import { useMemo } from 'react';

function Favorite(): JSX.Element {
  const cities = useAppSelector(selectCitiesFromFavoritesMemo);
  const favorites = useAppSelector(selectFavorites);
  const getFavoritesByCityMemo = useMemo(
    () => (offers: TOffersPreview, city: TCityName) =>
      getOffersByCity(offers, city),
    []
  );

  return (
    <main className="page__main page__main--favorites">
      <div className="page__favorites-container container">
        <section className="favorites">
          <h1 className="favorites__title">Saved listing</h1>
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
                    <Card
                      key={offer.id}
                      offer={offer}
                      type={TYPE_CARD.FAVORITES}
                    />
                  ))}
                </div>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </main>
  );
}

export { Favorite };

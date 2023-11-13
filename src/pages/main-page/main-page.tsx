import { Helmet } from 'react-helmet-async';
import { Header, Location, Map, PlaceList } from '../../components';
import { MapType } from '../../const';
import { TOfferPreview } from '../../types';
import { useState } from 'react';
import { useAppSelector } from '../../hooks';

function MainPage(): JSX.Element {
  const activeCity = useAppSelector((state) => state.city);
  const [activeCard, setActiveCard] = useState<TOfferPreview | null>(null);
  const offers = useAppSelector((state) => state.offers);

  const handleCardHover = (offer: TOfferPreview) => setActiveCard(offer);
  const handleCardLeave = () => setActiveCard(null);

  return (
    <div className="page page--gray page--main" data-active-card={activeCard}>
      <Helmet>
        <title>6 Cities - Main page</title>
      </Helmet>

      <Header />

      <main className="page__main page__main--index">
        <Location />
        <div className="cities">
          <div className="cities__places-container container">
            <PlaceList
              cityName={activeCity}
              offers={offers}
              onCardHover={handleCardHover}
              onCardLeave={handleCardLeave}
            />
            <div className="cities__right-section">
              <Map
                type={MapType.City}
                offers={offers}
                activeOffer={activeCard}
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export { MainPage };

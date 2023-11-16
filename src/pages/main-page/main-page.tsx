import { Helmet } from 'react-helmet-async';
import { Header, CityLine, Map, OfferBoard } from '../../components';
import { MapType } from '../../const';
import { TOfferPreview } from '../../types';
import { useState } from 'react';
import { useAppSelector } from '../../hooks';

function MainPage(): JSX.Element {
  const activeCity = useAppSelector((state) => state.city);
  const [activeCard, setActiveCard] = useState<TOfferPreview | null>(null);
  const offers = useAppSelector((state) => state.offers);
  const isDataLoading = useAppSelector((state) => state.isDataLoading);
  const handleCardHover = (offer: TOfferPreview) => setActiveCard(offer);
  const handleCardLeave = () => setActiveCard(null);

  if (isDataLoading) {
    return <div>Загружается...</div>;
  }

  return (
    <div className="page page--gray page--main" data-active-card={activeCard}>
      <Helmet>
        <title>6 Cities - Main page</title>
      </Helmet>

      <Header />

      <main className="page__main page__main--index">
        <CityLine />
        <div className="cities">
          <div className="cities__places-container container">
            <OfferBoard
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

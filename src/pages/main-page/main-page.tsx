import { Helmet } from 'react-helmet-async';
import { Header, CityLine, Map, OfferBoard } from '../../components';
import { MapType } from '../../const';
import { TOfferPreview } from '../../types';
import { CSSProperties, useState } from 'react';
import { useAppSelector } from '../../hooks';
import { Spinner } from '../../components/spinner/spinner';
import { getOffersByCity } from '../../utils';

const override: CSSProperties = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100vh',
};

function MainPage(): JSX.Element {
  const activeCity = useAppSelector((state) => state.city);
  const [activeCard, setActiveCard] = useState<TOfferPreview | null>(null);
  const offers = useAppSelector((state) => state.offers);
  const offersToRender = getOffersByCity(offers, activeCity);
  const handleCardHover = (offer: TOfferPreview) => setActiveCard(offer);
  const handleCardLeave = () => setActiveCard(null);
  const isDataLoading = useAppSelector((state) => state.isDataLoading);

  if (isDataLoading) {
    return (
      <Spinner color="#4481c3" width={8} height={100} cssOverride={override} />
    );
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
              offers={offersToRender}
              onCardHover={handleCardHover}
              onCardLeave={handleCardLeave}
            />
            <div className="cities__right-section">
              <Map
                type={MapType.City}
                offers={offersToRender}
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

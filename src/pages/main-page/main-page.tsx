import { Helmet } from 'react-helmet-async';
import { Header, CityLine, Map, OfferBoard } from '../../components';
import { MapType } from '../../const';
import { TOfferPreview } from '../../types';
import { CSSProperties, useState } from 'react';
import { useAppSelector } from '../../hooks';
import { Spinner } from '../../components/spinner/spinner';
import { getOffersByCity } from '../../utils';
import cn from 'classnames';
import { NotFoundPlaces } from '..';

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
  const isEmptyOffers = !offersToRender.length;

  return (
    <div className="page page--gray page--main" data-active-card={activeCard}>
      <Helmet>
        <title>6 Cities - Main page</title>
      </Helmet>

      <Header />

      <main className="page__main page__main--index">
        <CityLine />
        {isDataLoading && (
          <Spinner
            color="#4481c3"
            width={10}
            height={200}
            cssOverride={override}
            margin={10}
          />
        )}
        {!isDataLoading && (
          <div className="cities">
            <div
              className={cn('cities__places-container', 'container', {
                'cities__places-container--empty': isEmptyOffers,
              })}
            >
              {isEmptyOffers && <NotFoundPlaces city={activeCity} />}
              {!isEmptyOffers && (
                <>
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
                </>
              )}
            </div>
          </div>
        )}
      </main>
    </div>
  );
}

export { MainPage };

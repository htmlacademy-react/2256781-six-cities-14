import { Helmet } from 'react-helmet-async';
import { Header, CityLine, Map, OfferBoard } from '../../components';
import { MapType } from '../../const';
import { TOfferPreview } from '../../types';
import { CSSProperties, memo, useCallback, useState } from 'react';
import { useAppSelector } from '../../hooks';
import { Spinner } from '../../components/spinner/spinner';
import cn from 'classnames';
import { NotFoundPlaces } from '..';
import {
  selectCity,
  selectIsEmptyOffers,
  selectIsOffersLoading,
  selectOffersMemo,
} from '../../store';

const override: CSSProperties = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100vh',
};

const OfferBoardMemo = memo(OfferBoard);

function MainPage(): JSX.Element {
  const [activeCard, setActiveCard] = useState<TOfferPreview | null>(null);
  const offersToRender = useAppSelector(selectOffersMemo);
  const isOffersLoading = useAppSelector(selectIsOffersLoading);
  const isEmptyOffers = useAppSelector(selectIsEmptyOffers);
  const activeCity = useAppSelector(selectCity);
  const handleCardHover = useCallback(
    (offer: TOfferPreview) => setActiveCard(offer),
    []
  );
  const handleCardLeave = useCallback(() => setActiveCard(null), []);

  return (
    <div className="page page--gray page--main" data-active-card={activeCard}>
      <Helmet>
        <title>6 Cities - Main page</title>
      </Helmet>

      <Header />

      <main className="page__main page__main--index">
        <CityLine />
        {isOffersLoading && (
          <Spinner
            color="#4481c3"
            width={10}
            height={200}
            cssOverride={override}
            margin={10}
          />
        )}
        {!isOffersLoading && (
          <div className="cities">
            <div
              className={cn('cities__places-container', 'container', {
                'cities__places-container--empty': isEmptyOffers,
              })}
            >
              {isEmptyOffers && <NotFoundPlaces city={activeCity} />}
              {!isEmptyOffers && (
                <>
                  <OfferBoardMemo
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

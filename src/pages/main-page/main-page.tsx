import { Helmet } from 'react-helmet-async';
import { Header, Location, Map, Place } from '../../components';
import { AuthorizationStatus } from '../../const';
import { TOffer, TOffers } from '../../types';
import { useState } from 'react';

type TMainPageProps = {
  offers: TOffers;
  authorization: AuthorizationStatus;
};

function MainPage({ offers, authorization }: TMainPageProps): JSX.Element {
  const [activeCard, setActiveCard] = useState<TOffer | null>(null);

  const handleCardHover = (offer: TOffer) => setActiveCard(offer);
  const handleCardLeave = () => setActiveCard(null);

  return (
    <div className="page page--gray page--main" data-active-card={activeCard}>
      <Helmet>
        <title>6 Cities - Main page</title>
      </Helmet>

      <Header authorization={authorization} />

      <main className="page__main page__main--index">
        <Location />
        <div className="cities">
          <div className="cities__places-container container">
            <Place
              offers={offers}
              onCardHover={handleCardHover}
              onCardLeave={handleCardLeave}
            />
            <div className="cities__right-section">
              <Map offers={offers} selectedOffer={activeCard} />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export { MainPage };

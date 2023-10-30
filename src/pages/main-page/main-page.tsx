import { Helmet } from 'react-helmet-async';
import { Header, Location, Map, Place } from '../../components';
import { AuthorizationStatus } from '../../const';
import { TOffer } from '../../types';

type TMainPageProps = {
  offers: TOffer[];
  authorization: AuthorizationStatus;
};

function MainPage({ offers, authorization }: TMainPageProps): JSX.Element {


  return (
    <div className="page page--gray page--main">
      <Helmet>
        <title>6 Cities - Main page</title>
      </Helmet>

      <Header authorization={authorization} />

      <main className="page__main page__main--index">
        <Location />
        <div className="cities">
          <div className="cities__places-container container">
            <Place offers={offers}/>
            <div className="cities__right-section">
              <Map />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export { MainPage };

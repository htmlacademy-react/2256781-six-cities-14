import { Helmet } from 'react-helmet-async';
import { FavoriteList, Header } from '../../components';
import { Footer } from '../../components';
import { AuthorizationStatus } from '../../const';
import { TOffer } from '../../types';

type TFavoritePageProps = {
  offers: TOffer[];
  authorization: AuthorizationStatus;
};

function getFavorites(offers: TOffer[]): TOffer[] | [] {
  return offers.filter((offer) => offer.isFavorite);
}

function FavoritePage({ authorization, offers }: TFavoritePageProps): JSX.Element {
  const favorites = getFavorites(offers);

  return (
    <div className="page">
      <Helmet>
        <title>6 Cities - Favorite page</title>
      </Helmet>

      <Header authorization={authorization} />

      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <FavoriteList offers={favorites}/>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export { FavoritePage };

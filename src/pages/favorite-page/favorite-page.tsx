import { Helmet } from 'react-helmet-async';
import { FavoriteList, Header } from '../../components';
import { Footer } from '../../components';

function FavoritePage(): JSX.Element {
  return (
    <div className="page">
      <Helmet>
        <title>6 Cities - Favorite page</title>
      </Helmet>

      <Header />

      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <FavoriteList />
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export { FavoritePage };

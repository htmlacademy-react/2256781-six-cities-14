import { Helmet } from 'react-helmet-async';
import { Favorite, FavoriteEmpty, Header } from '../../components';
import { Footer } from '../../components';
import { selectIsEmptyFavorites } from '../../store';
import { useAppSelector } from '../../hooks';

function FavoritePage(): JSX.Element {
  const isFavoritesEmpty = useAppSelector(selectIsEmptyFavorites);

  return (
    <div className="page page--favorites-empty">
      <Helmet>
        <title>6 Cities - Favorite page</title>
      </Helmet>

      <Header />

      {!isFavoritesEmpty && <Favorite />}
      {isFavoritesEmpty && <FavoriteEmpty />}

      <Footer />
    </div>
  );
}

export { FavoritePage };

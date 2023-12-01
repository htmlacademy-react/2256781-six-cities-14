import { Helmet } from 'react-helmet-async';
import { Favorite, FavoriteEmpty, Header } from '../../components';
import { Footer } from '../../components';
import { getAsyncFavorites, selectIsEmptyFavorites } from '../../store';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { useEffect } from 'react';

function FavoritePage(): JSX.Element {
  const isFavoritesEmpty = useAppSelector(selectIsEmptyFavorites);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getAsyncFavorites());
  }, [dispatch]);

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

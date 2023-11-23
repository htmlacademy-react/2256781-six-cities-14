import { Route, Routes } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';
import { ProtectedRoute } from '../../components';
import { useEffect } from 'react';
import { useAppDispatch } from '../../hooks';
import { getAsyncAuth } from '../../store';
import {
  MainPage,
  NotFoundPage,
  LoginPage,
  FavoritePage,
  OfferPage,
} from '../../pages';

function App(): JSX.Element {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getAsyncAuth());
  }, [dispatch]);

  return (
    <Routes>
      <Route path={AppRoute.Main} element={<MainPage />} />
      <Route
        path={AppRoute.Login}
        element={
          <ProtectedRoute
            restrictedFor={AuthorizationStatus.Auth}
            redirectTo={AppRoute.Main}
          >
            <LoginPage />
          </ProtectedRoute>
        }
      />
      <Route
        path={AppRoute.Favorites}
        element={
          <ProtectedRoute
            restrictedFor={AuthorizationStatus.NoAuth}
            redirectTo={AppRoute.Login}
          >
            <FavoritePage />
          </ProtectedRoute>
        }
      />
      <Route path={`${AppRoute.Offer}:offerId`} element={<OfferPage />} />
      <Route path={AppRoute.NotFound} element={<NotFoundPage />} />
    </Routes>
  );
}

export { App };

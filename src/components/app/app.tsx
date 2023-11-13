import { Route, Routes } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';
import { ProtectedRoute } from '../../components';
import {
  MainPage,
  NotFoundPage,
  LoginPage,
  FavoritePage,
  OfferPage,
} from '../../pages';
import { fetchOffersAction } from '../../store';
import { useAppDispatch } from '../../hooks';

function App(): JSX.Element {
  const dispatch = useAppDispatch();
  dispatch(fetchOffersAction());

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
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export { App };

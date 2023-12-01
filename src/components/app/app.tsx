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

function App(): JSX.Element {
  return (
    <Routes>
      <Route index element={<MainPage />} />
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
      <Route path={AppRoute.Login} element={<LoginPage />} />
      <Route path={`${AppRoute.Offer}:offerId`} element={<OfferPage />} />
      <Route path={AppRoute.NotFound} element={<NotFoundPage />} />
    </Routes>
  );
}

export { App };

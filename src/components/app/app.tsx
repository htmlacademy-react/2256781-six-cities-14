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
import { TOffer } from '../../types';

type TAppProps = {
  offers: TOffer[];
  authorization: AuthorizationStatus;
};

function App({ offers, authorization }: TAppProps): JSX.Element {
  return (
    <Routes>
      <Route
        path={AppRoute.Main}
        element={
          <MainPage offers={offers} authorization={authorization} />
        }
      />
      <Route
        path={AppRoute.Login}
        element={
          <ProtectedRoute
            authorization={authorization}
            restrictedFor={AuthorizationStatus.Auth}
            redirectTo={AppRoute.Main}
          >
            <LoginPage authorization={authorization} />
          </ProtectedRoute>
        }
      />
      <Route
        path={AppRoute.Favorites}
        element={
          <ProtectedRoute
            authorization={authorization}
            restrictedFor={AuthorizationStatus.NoAuth}
            redirectTo={AppRoute.Login}
          >
            <FavoritePage authorization={authorization} />
          </ProtectedRoute>
        }
      />
      <Route
        path={AppRoute.Offer}
        element={<OfferPage authorization={authorization} />}
      />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export { App };

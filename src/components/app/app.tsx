import { Route, BrowserRouter, Routes } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';
import { PrivateRoute } from '../../components';
import {
  MainPage,
  NotFoundPage,
  LoginPage,
  FavoritePage,
  OfferPage,
} from '../../pages';
import { HelmetProvider } from 'react-helmet-async';

type AppProps = {
  quantity: number;
  offerCount: number;
};

function App({ quantity, offerCount }: AppProps): JSX.Element {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route
            path={AppRoute.Main}
            element={<MainPage quantity={quantity} offerCount={offerCount} />}
          />
          <Route path={AppRoute.Login} element={<LoginPage />} />
          <Route
            path={AppRoute.Favorites}
            element={
              <PrivateRoute authorizationStatus={AuthorizationStatus.NoAuth}>
                <FavoritePage />
              </PrivateRoute>
            }
          />
          <Route path={AppRoute.Offer} element={<OfferPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export { App };

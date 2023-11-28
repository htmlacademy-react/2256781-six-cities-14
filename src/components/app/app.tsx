import { Route, Routes } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';
import { ProtectedRoute, ScrollToTop } from '../../components';
import { useEffect, useRef } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import {
  getAsyncAuth,
  getAsyncFavorites,
  getAsyncOffers,
  selectAuthStatus,
} from '../../store';
import {
  MainPage,
  NotFoundPage,
  LoginPage,
  FavoritePage,
  OfferPage,
} from '../../pages';
import { HistoryRouter } from '../history-router/history-router';
import { browserHistory } from '../../browser-history';

function App(): JSX.Element {
  const dispatch = useAppDispatch();
  const authStatus = useAppSelector(selectAuthStatus);
  const isMounted = useRef(true);

  useEffect(() => {
    if (isMounted.current) {
      dispatch(getAsyncAuth());
    }

    dispatch(getAsyncOffers());

    if (authStatus === AuthorizationStatus.Auth) {
      dispatch(getAsyncFavorites());
    }

    return () => {
      isMounted.current = false;
    };
  }, [dispatch, authStatus]);

  return (
    <HistoryRouter history={browserHistory}>
      <ScrollToTop />
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
    </HistoryRouter>
  );
}

export { App };

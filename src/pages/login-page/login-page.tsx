import { Helmet } from 'react-helmet-async';
import { AppRoute, AuthorizationStatus } from '../../const';
import { useNavigate } from 'react-router-dom';
import { Header, LoginForm } from '../../components';
import { getRandomCity } from '../../utils';
import { assignCity, selectAuthStatus } from '../../store';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { useEffect } from 'react';

function LoginPage(): JSX.Element {
  const dispatch = useAppDispatch();
  const authStatus = useAppSelector(selectAuthStatus);
  const navigate = useNavigate();
  const randomCity = getRandomCity();

  const handleSetRandomCity = () => {
    dispatch(assignCity(randomCity));
    navigate(AppRoute.Main);
  };

  useEffect(() => {
    if (authStatus === AuthorizationStatus.Auth) {
      navigate(AppRoute.Main);
    }
  }, [authStatus, navigate]);

  return (
    <div className="page page--gray page--login">
      <Helmet>
        <title>6 Cities - Login page</title>
      </Helmet>

      <Header />

      <main className="page__main page__main--login">
        <div className="page__login-container container">
          <LoginForm />
          <section className="locations locations--login locations--current">
            <div className="locations__item">
              <button
                type="button"
                className="locations__item-link"
                onClick={handleSetRandomCity}
              >
                <span>{randomCity}</span>
              </button>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export { LoginPage };

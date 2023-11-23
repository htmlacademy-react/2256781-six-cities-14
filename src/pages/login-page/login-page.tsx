import { Helmet } from 'react-helmet-async';
import { AppRoute } from '../../const';
import { Link } from 'react-router-dom';
import { Header, LoginForm } from '../../components';

function LoginPage(): JSX.Element {
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
              <Link className="locations__item-link" to={AppRoute.Main}>
                <span>Amsterdam</span>
              </Link>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export { LoginPage };

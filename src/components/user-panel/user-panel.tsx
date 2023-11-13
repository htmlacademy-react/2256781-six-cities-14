import { Link } from 'react-router-dom';
import { AppRoute, AuthorizationStatus, FAVORITE_QUANTITY } from '../../const';
import { useAppSelector } from '../../hooks';

function UserPanel(): JSX.Element {
  const authorization = useAppSelector((state) => state.authorizationStatus);

  return authorization === AuthorizationStatus.Auth ? (
    <nav className="header__nav">
      <ul className="header__nav-list">
        <li className="header__nav-item user">
          <Link
            className="header__nav-link header__nav-link--profile"
            to={AppRoute.Main}
          >
            <div className="header__avatar-wrapper user__avatar-wrapper"></div>
            <span className="header__user-name user__name">
              Oliver.conner@gmail.com
            </span>
            <span className="header__favorite-count">{FAVORITE_QUANTITY}</span>
          </Link>
        </li>
        <li className="header__nav-item">
          <Link className="header__nav-link" to={AppRoute.Main}>
            <span className="header__signout">Sign out</span>
          </Link>
        </li>
      </ul>
    </nav>
  ) : (
    <nav className="header__nav">
      <ul className="header__nav-list">
        <li className="header__nav-item user">
          <Link
            className="header__nav-link header__nav-link--profile"
            to={AppRoute.Login}
          >
            <div className="header__avatar-wrapper user__avatar-wrapper"></div>
            <span className="header__login">Sign in</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export { UserPanel };

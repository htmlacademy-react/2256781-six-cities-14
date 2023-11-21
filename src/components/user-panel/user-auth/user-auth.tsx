import { Link } from 'react-router-dom';
import { AppRoute } from '../../../const';
import { TUserData } from '../../../types';

type TUserAuthProps = {
  onSignOut: () => void;
  quantityFavorite: number;
  userData: TUserData | null;
};

function UserAuth({ onSignOut, quantityFavorite, userData }: TUserAuthProps) {
  return (
    <nav className="header__nav">
      <ul className="header__nav-list">
        <li className="header__nav-item user">
          <Link
            className="header__nav-link header__nav-link--profile"
            to={AppRoute.Main}
          >
            <div className="header__avatar-wrapper user__avatar-wrapper"></div>
            <span className="header__user-name user__name">
              {userData?.email}
            </span>
            <span className="header__favorite-count">{quantityFavorite}</span>
          </Link>
        </li>
        <li className="header__nav-item">
          <Link className="header__nav-link" to={AppRoute.Main} onClick={onSignOut}>
            <span className="header__signout">Sign out</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export { UserAuth };

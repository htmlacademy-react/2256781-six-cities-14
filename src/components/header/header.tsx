import { AuthorizationStatus } from '../../const';
import { Logo } from '../logo/logo';
import { Nav } from '../nav/nav';

type THeaderProps = {
  authorization: AuthorizationStatus;
};

function Header({
  authorization = AuthorizationStatus.NoAuth,
}: THeaderProps): JSX.Element {
  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Logo />
          </div>
          {authorization === AuthorizationStatus.Auth ? (
            <Nav authorization={authorization} />
          ) : null}
        </div>
      </div>
    </header>
  );
}

export { Header };

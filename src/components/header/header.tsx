import { AuthorizationStatus } from '../../const';
import { Logo } from '../logo/logo';
import { Navigation } from '../navigation/navigation';

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
          <Navigation authorization={authorization} />
        </div>
      </div>
    </header>
  );
}

export { Header };

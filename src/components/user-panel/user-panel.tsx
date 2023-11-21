import { AuthorizationStatus } from '../../const';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { deleteAuth } from '../../store';
import { UserAuth } from './user-auth/user-auth';
import { UserNotAuth } from './user-not-auth/user-not-auth';

function UserPanel(): JSX.Element {
  const authStatus = useAppSelector((state) => state.authorizationStatus);
  const userData = useAppSelector((state) => state.user);
  const quantityFavorite = useAppSelector((state) => state.favorites).length;
  const dispatch = useAppDispatch();

  function handleSignOut() {
    dispatch(deleteAuth());
  }

  return authStatus === AuthorizationStatus.Auth ? (
    <UserAuth
      onSignOut={handleSignOut}
      userData={userData}
      quantityFavorite={quantityFavorite}
    />
  ) : (
    <UserNotAuth />
  );
}

export { UserPanel };

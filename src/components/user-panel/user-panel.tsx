import { AuthorizationStatus } from '../../const';
import { useAppDispatch, useAppSelector } from '../../hooks';
import {
  deleteAsyncAuth,
  selectAuthStatus,
  selectFavoritesCount,
  selectUserAuthData,
} from '../../store';
import { UserAuth } from './user-auth/user-auth';
import { UserNotAuth } from './user-not-auth/user-not-auth';

function UserPanel(): JSX.Element {
  const authStatus = useAppSelector(selectAuthStatus);
  const userData = useAppSelector(selectUserAuthData);
  const quantityFavorite = useAppSelector(selectFavoritesCount);
  const dispatch = useAppDispatch();

  function handleSignOut() {
    dispatch(deleteAsyncAuth());
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

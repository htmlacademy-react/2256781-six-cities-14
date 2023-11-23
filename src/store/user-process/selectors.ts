import { NameSpace } from '../../const';
import { TState } from '../../types/state';
import { AuthorizationStatus } from '../../const';
import { TUserData } from '../../types';

const selectAuthStatus = (state: TState): AuthorizationStatus => state[NameSpace.User].authorizationStatus;

const selectIsAuthStatus = (state: TState): boolean => state[NameSpace.User].authorizationStatus !== AuthorizationStatus.NoAuth;

const selectUserAuthData = (state: TState): TUserData | null => state[NameSpace.User].user;

export { selectAuthStatus, selectIsAuthStatus, selectUserAuthData };

import { NameSpace } from '../../const';
import { TState } from '../../types/state';
import { AuthorizationStatus } from '../../const';
import { TUserData } from '../../types';

const selectAuthStatus = (state: Pick<TState, NameSpace.User>): AuthorizationStatus => state[NameSpace.User].authorizationStatus;

const selectIsAuthStatus = (state: Pick<TState, NameSpace.User>): boolean => state[NameSpace.User].authorizationStatus !== AuthorizationStatus.NoAuth;

const selectUserAuthData = (state: Pick<TState, NameSpace.User>): TUserData | null => state[NameSpace.User].user;

export { selectAuthStatus, selectIsAuthStatus, selectUserAuthData };

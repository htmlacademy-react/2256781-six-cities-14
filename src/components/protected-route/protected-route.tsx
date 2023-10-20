import { Navigate } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';

type TProtectedRouteProps = {
  authorization: AuthorizationStatus;
  restrictedFor: AuthorizationStatus;
  redirectTo: AppRoute;
  children: JSX.Element;
};

function ProtectedRoute(props: TProtectedRouteProps): JSX.Element {
  const { authorization, restrictedFor, redirectTo, children } = props;

  return authorization === restrictedFor ? (
    <Navigate to={redirectTo} />
  ) : (
    children
  );
}

export { ProtectedRoute };

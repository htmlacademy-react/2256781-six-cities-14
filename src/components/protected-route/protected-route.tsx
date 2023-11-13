import { Navigate } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';
import { useAppSelector } from '../../hooks';

type TProtectedRouteProps = {
  restrictedFor: AuthorizationStatus;
  redirectTo: AppRoute;
  children: JSX.Element;
};

function ProtectedRoute(props: TProtectedRouteProps): JSX.Element {
  const { restrictedFor, redirectTo, children } = props;
  const authorization = useAppSelector((state) => state.authorizationStatus);

  return authorization === restrictedFor ? (
    <Navigate to={redirectTo} />
  ) : (
    children
  );
}

export { ProtectedRoute };

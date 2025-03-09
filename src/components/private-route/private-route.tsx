import {Navigate} from 'react-router-dom';
import { AuthorizationStatus, AppRoute } from '../../constant';
import { useAppSelector } from '../hooks';
import { getAuthorizationStatus } from '../../store/user-process/selectors';

function PrivateRoute({children}: {children: JSX.Element}): JSX.Element {
  const authorizationStatus = useAppSelector(getAuthorizationStatus);

  return (
    authorizationStatus === AuthorizationStatus.Auth
      ? children
      : <Navigate to={AppRoute.Login} />
  );
}

export default PrivateRoute;

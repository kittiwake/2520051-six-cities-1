import {
  Routes,
  Route,
} from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../constant';

import MainScreen from '../pages/main-screen/main-screen';
import FavoritesScreen from '../pages/favorites-screen/favorites-screen';
import OfferScreen from '../pages/offer-screen/offer-screen';
import LoginScreen from '../pages/login-screen/login-screen';
import NotFoundScreen from '../pages/not-found-screen/not-found-screen';
import PrivateRoute from '../components/private-route/private-route';
import { useAppDispatch } from '../components/hooks';
import HistoryRouter from '../components/history-router/history-router';
import browserHistory from '../browser-history';
import { checkAuthAction } from '../store/api-actions';
import { useEffect } from 'react';

const authorizationStatus = AuthorizationStatus.Auth;

function App(): JSX.Element {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(checkAuthAction());
  }, [dispatch]);

  return (
    <HistoryRouter history={browserHistory}>
      <Routes>
        <Route
          path={AppRoute.Main}
          element={<MainScreen />}
        />
        <Route
          path={AppRoute.Favorites}
          element={
            <PrivateRoute
              authorizationStatus={authorizationStatus}
            >
              <FavoritesScreen />
            </PrivateRoute>
          }
        />
        <Route
          path={AppRoute.Offer}
          element={<OfferScreen authorizationStatus={authorizationStatus} />}
        />
        <Route
          path={AppRoute.Login}
          element={<LoginScreen />}
        />
        <Route
          path="*"
          element={<NotFoundScreen />}
        />
      </Routes>
    </HistoryRouter>
  );
}

export default App;

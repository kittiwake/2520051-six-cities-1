// import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  // Link
} from 'react-router-dom';
import { AppRoute } from '../constant';

import MainScreen from '../pages/main-screen/main-screen';

// эти импорты только до роутинга
import FavoritesScreen from '../pages/favorites-screen/favorites-screen';
import OfferScreen from '../pages/offer-screen/offer-screen';
import LoginScreen from '../pages/login-screen/login-screen';
import NotFoundScreen from '../pages/not-found-screen/not-found-screen';


function App(): JSX.Element {
  return(
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Main}
          element={<MainScreen />}
        />
        <Route
          path={AppRoute.Favorites}
          element={<FavoritesScreen />}
        />
        <Route
          path={AppRoute.Offer}
          element={<OfferScreen />}
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
    </BrowserRouter>
  );
}

export default App;

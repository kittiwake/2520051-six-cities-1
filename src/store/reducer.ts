import { createReducer, PayloadAction } from '@reduxjs/toolkit';
import { setCity, setSorting, setActiveCardId, loadOffers, setDataLoadingStatus, setAuthorizationStatus, setError, setUser, loadFavorites } from './action';
import { AuthorizationStatus, cities } from '../constant';
import { PlacesOption } from '../transfers';
import { Offers } from '../types/main';
import { User } from '../types/user';

interface State {
  city: typeof cities[0];
  offers: Offers;
  favorites: Offers;
  countFavorites: number;
  sorting: string;
  activeCardId: string | null;
  isDataLoading: boolean;
  authorizationStatus: AuthorizationStatus;
  user: User | null;
  error: string | null;
}

const initialState: State = {
  city: cities[0],
  offers: [],
  favorites: [],
  countFavorites: 0,
  sorting: PlacesOption.POPULAR,
  activeCardId: null,
  isDataLoading: false,
  authorizationStatus: AuthorizationStatus.Unknown,
  user: null,
  error: null,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setCity, (state, action) => {
      state.city = action.payload;
    })
    .addCase(setSorting, (state, action) => {
      state.sorting = action.payload;
    })
    .addCase(setUser, (state, action) => {
      state.user = action.payload;
    })
    .addCase(setActiveCardId, (state, action: PayloadAction<string | null>) => {
      state.activeCardId = action.payload;
    })
    .addCase(loadOffers, (state, action) => {
      state.offers = action.payload;
    })
    .addCase(loadFavorites, (state, action) => {
      state.favorites = action.payload;
      state.countFavorites = state.favorites.length;
    })
    .addCase(setDataLoadingStatus, (state, action) => {
      state.isDataLoading = action.payload;
    })
    .addCase(setAuthorizationStatus, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(setError, (state, action) => {
      state.error = action.payload;
    });
});

export {reducer};

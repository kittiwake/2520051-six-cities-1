import { createAction } from '@reduxjs/toolkit';
import { City, Offers } from '../types/main';
import { AuthorizationStatus, AppRoute } from '../constant';
import { User } from '../types/user';

export const setCity = createAction<City>('main/setCity');

export const setSorting = createAction<string>('main/setSorting');
export const setActiveCardId = createAction<string | null>('map/setActiveCardId');

export const loadOffers = createAction<Offers>('data/loadOffers');
export const loadFavorites = createAction<Offers>('data/loadFavorites');
export const setDataLoadingStatus = createAction<boolean>('data/setDataLoadingStatus');

export const setAuthorizationStatus = createAction<AuthorizationStatus>('user/setAuthorizationStatus');
export const setUser = createAction<User>('user/setUser');

export const setError = createAction<string | null>('app/setError');

export const redirectToRoute = createAction<AppRoute>('app/redirectToRoute');


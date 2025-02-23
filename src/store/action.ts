import { createAction } from '@reduxjs/toolkit';
import { City, Offers, User } from '../types/main';
import { AuthorizationStatus, AppRoute } from '../constant';

const setCity = createAction<City>('main/setCity');

const setSorting = createAction<string>('main/setSorting');
const setActiveCardId = createAction<string | null>('map/setActiveCardId');

const loadOffers = createAction<Offers>('data/loadOffers');
const loadFavorites = createAction<Offers>('data/loadFavorites');
const setDataLoadingStatus = createAction<boolean>('data/setDataLoadingStatus');

export const setAuthorizationStatus = createAction<AuthorizationStatus>('user/setAuthorizationStatus');
export const setUser = createAction<User>('user/setUser');

export const setError = createAction<string | null>('app/setError');

export const redirectToRoute = createAction<AppRoute>('app/redirectToRoute');


export {setCity, setSorting, setActiveCardId, loadOffers, setDataLoadingStatus, loadFavorites,};

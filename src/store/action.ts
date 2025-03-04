import { createAction } from '@reduxjs/toolkit';
import { City, Offers } from '../types/main';
import { Comment } from '../types/offer';
import { AuthorizationStatus, AppRoute } from '../constant';
import { User } from '../types/user';
import { OfferInfo } from '../types/offer';

export const setCity = createAction<City>('main/setCity');

export const setSorting = createAction<string>('main/setSorting');
export const setActiveCardId = createAction<string | null>('map/setActiveCardId');

export const loadOffers = createAction<Offers>('data/loadOffers');
export const loadFavorites = createAction<Offers>('data/loadFavorites');
export const loadOfferById = createAction<OfferInfo>('data/loadOfferById');
export const loadNearestOffers = createAction<Offers>('data/nearestOffers');
export const loadComments = createAction<Comment[]>('data/loadComments');
export const addComment = createAction<Comment>('data/addComment');
export const setCountComments = createAction<number>('data/setCountComments');
export const setReviewRaiting = createAction<number>('data/setReviewRaiting');
export const setReviewComment = createAction<string>('data/setReviewComment');

export const setDataLoadingStatus = createAction<boolean>('data/setDataLoadingStatus');
export const setNearestLoadingStatus = createAction<boolean>('data/setNearestLoadingStatus');
export const setCommentsLoadingStatus = createAction<boolean>('data/setCommentsLoadingStatus');
export const setReviewLoadingStatus = createAction<boolean>('data/setReviewLoadingStatus');

export const setAuthorizationStatus = createAction<AuthorizationStatus>('user/setAuthorizationStatus');
export const setUser = createAction<User>('user/setUser');

export const setError = createAction<string | null>('app/setError');

export const redirectToRoute = createAction<AppRoute>('app/redirectToRoute');


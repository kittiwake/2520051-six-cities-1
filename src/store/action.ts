import { createAction } from '@reduxjs/toolkit';
import { Offers } from '../types/main';
import { Comment } from '../types/offer';
import { AppRoute } from '../constant';


export const setActiveCardId = createAction<string | null>('map/setActiveCardId');

export const loadNearestOffers = createAction<Offers>('offer/nearestOffers');
export const loadComments = createAction<Comment[]>('offer/loadComments');
export const addComment = createAction<Comment>('offer/addComment');
export const setCountComments = createAction<number>('offer/setCountComments');
export const setReviewRaiting = createAction<number>('offer/setReviewRaiting');
export const setReviewComment = createAction<string>('offer/setReviewComment');

export const setNearestLoadingStatus = createAction<boolean>('offer/setNearestLoadingStatus');
export const setCommentsLoadingStatus = createAction<boolean>('offer/setCommentsLoadingStatus');
export const setReviewLoadingStatus = createAction<boolean>('offer/setReviewLoadingStatus');

export const redirectToRoute = createAction<AppRoute>('app/redirectToRoute');


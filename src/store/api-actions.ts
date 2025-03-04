import {createAsyncThunk} from '@reduxjs/toolkit';
import { State, AppDispatch } from '../types/state';
import { AxiosInstance } from 'axios';
import { AppRoute, AuthorizationStatus, endPoints, TIMEOUT_SHOW_ERROR, initReview } from '../constant';
import { Offers} from '../types/main';
import {
  addComment,
  loadComments,
  loadFavorites,
  loadNearestOffers,
  loadOfferById,
  loadOffers,
  redirectToRoute,
  setAuthorizationStatus,
  setCommentsLoadingStatus,
  setCountComments,
  setDataLoadingStatus,
  setError,
  setNearestLoadingStatus,
  setReviewComment,
  setReviewLoadingStatus,
  setReviewRaiting,
  setUser
} from './action';
import { AuthData, User } from '../types/user';
import { dropToken, saveToken } from '../services/token';
import { store } from './';
import { OfferInfo, Comment } from '../types/offer';
import { sortByDateDescending } from '../utils';


export const clearErrorAction = createAsyncThunk(
  'game/clearError',
  () => {
    setTimeout(
      () => store.dispatch(setError(null)),
      TIMEOUT_SHOW_ERROR,
    );
  },
);

export const fetchOffersAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchOffers',
  async (_arg, {dispatch, extra: api}) => {
    dispatch(setDataLoadingStatus(true));
    const {data} = await api.get<Offers>(endPoints.OFFERS);
    dispatch(setDataLoadingStatus(false));
    dispatch(loadOffers(data));
  },
);

export const fetchFavoritesAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/loadFavorites',
  async (_arg, {dispatch, extra: api}) => {
    dispatch(setDataLoadingStatus(true));
    const {data} = await api.get<Offers>(endPoints.FAVORITE);
    dispatch(setDataLoadingStatus(false));
    dispatch(loadFavorites(data));
  },
);

export const fetchOfferAction = createAsyncThunk<void, string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchOffer',
  async (offerId, {dispatch, extra: api}) => {
    dispatch(setDataLoadingStatus(true));
    const { data } = await api.get<OfferInfo>(endPoints.OFFER.replace(':offerId', offerId));
    dispatch(loadOfferById(data));
    dispatch(setDataLoadingStatus(false));
  },
);

export const fetchNearbyOffersAction = createAsyncThunk<void, string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchNearbyOffers',
  async (offerId, {dispatch, extra: api}) => {
    dispatch(setNearestLoadingStatus(true));
    const {data} = await api.get<Offers>(endPoints.NEARBY.replace(':offerId', offerId));
    dispatch(loadNearestOffers(data));
    dispatch(setNearestLoadingStatus(false));
  },
);

export const fetchCommentsAction = createAsyncThunk<void, string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchComments',
  async (offerId, {dispatch, extra: api}) => {
    dispatch(setCommentsLoadingStatus(true));
    const {data} = await api.get<Comment[]>(endPoints.COMMENTS.replace(':offerId', offerId));

    dispatch(loadComments(sortByDateDescending(data)));
    dispatch(setCountComments(data.length));
    dispatch(setCommentsLoadingStatus(false));
  },
);

type AddingCommentPayload = {
  'offerId': string;
  'comment': string;
  'rating': number;
}

export const addCommentAction = createAsyncThunk<void, AddingCommentPayload, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/addComment',
  async ({offerId, comment, rating}, {dispatch, extra: api}) => {
    dispatch(setReviewLoadingStatus(true));
    const {data} = await api.post<Comment>(endPoints.COMMENTS.replace(':offerId', offerId), { comment, rating });
    dispatch(addComment(data));
    dispatch(setReviewComment(initReview.comment));
    dispatch(setReviewRaiting(initReview.rating));
    dispatch(setReviewLoadingStatus(false));
  },
);

export const checkAuthAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/checkAuth',
  async (_arg, {dispatch, extra: api}) => {
    try {
      const {data} = await api.get<User>(endPoints.LOGIN);
      dispatch(setAuthorizationStatus(AuthorizationStatus.Auth));
      dispatch(setUser(data));
      dispatch(fetchFavoritesAction());
    } catch {
      dispatch(setAuthorizationStatus(AuthorizationStatus.NoAuth));
    }
  },
);

export const loginAction = createAsyncThunk<void, AuthData, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/login',
  async ({login: email, password}, {dispatch, extra: api}) => {
    const {data} = await api.post<User>(endPoints.LOGIN, {email, password});
    saveToken(data.token);
    dispatch(setUser(data));
    dispatch(setAuthorizationStatus(AuthorizationStatus.Auth));
    dispatch(fetchFavoritesAction());
    dispatch(redirectToRoute(AppRoute.Favorites));
  },
);

export const logoutAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/logout',
  async (_arg, {dispatch, extra: api}) => {
    await api.delete(endPoints.LOGOUT);
    dropToken();
    dispatch(setAuthorizationStatus(AuthorizationStatus.NoAuth));
    dispatch(loadFavorites([]));
  },
);


import { createReducer, PayloadAction } from '@reduxjs/toolkit';
import {
  setCity,
  setSorting,
  setActiveCardId,
  loadOffers,
  setDataLoadingStatus,
  setAuthorizationStatus,
  setError,
  setUser,
  loadFavorites,
  loadOfferById,
  loadNearestOffers,
  loadComments,
  addComment,
  setNearestLoadingStatus,
  setCommentsLoadingStatus,
  setReviewComment,
  setReviewRaiting,
  setCountComments,
  setReviewLoadingStatus
} from './action';
import { AuthorizationStatus, cities } from '../constant';
import { PlacesOption } from '../transfers';
import { Offers } from '../types/main';
import { User } from '../types/user';
import { OfferInfo, Comment } from '../types/offer';

interface State {
  city: typeof cities[0];
  offers: Offers;
  favorites: Offers;
  currentOffer: OfferInfo | null;
  nearestOffers: Offers;
  countFavorites: number;
  comments: Comment[];
  countComments: number;
  review: {
    rating: number;
    comment: string;
  };
  sorting: string;
  activeCardId: string | null;
  isDataLoading: boolean;
  isNearestLoading: boolean;
  isCommentsLoading: boolean;
  isReviewLoading: boolean;
  authorizationStatus: AuthorizationStatus;
  user: User | null;
  error: string | null;
}

const initialState: State = {
  city: cities[0],
  offers: [],
  favorites: [],
  currentOffer: null,
  nearestOffers: [],
  countFavorites: 0,
  comments: [],
  countComments: 0,
  review: {
    rating: 0,
    comment: ''
  },
  sorting: PlacesOption.POPULAR,
  activeCardId: null,
  isDataLoading: false,
  isNearestLoading: false,
  isCommentsLoading: false,
  isReviewLoading: false,
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
    .addCase(loadOfferById, (state, action) => {
      state.currentOffer = action.payload;
    })
    .addCase(loadComments, (state, action) => {
      state.comments = action.payload;
    })
    .addCase(setCountComments, (state, action) => {
      state.countComments = action.payload;
    })
    .addCase(setReviewRaiting, (state, action) => {
      state.review.rating = action.payload;
    })
    .addCase(setReviewComment, (state, action) => {
      state.review.comment = action.payload;
    })
    .addCase(addComment, (state, action) => {
      state.comments.splice(0, 0, action.payload);
      state.countComments++;
    })
    .addCase(loadNearestOffers, (state, action) => {
      state.nearestOffers = action.payload;
    })
    .addCase(setDataLoadingStatus, (state, action) => {
      state.isDataLoading = action.payload;
    })
    .addCase(setNearestLoadingStatus, (state, action) => {
      state.isNearestLoading = action.payload;
    })
    .addCase(setCommentsLoadingStatus, (state, action) => {
      state.isCommentsLoading = action.payload;
    })
    .addCase(setAuthorizationStatus, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(setReviewLoadingStatus, (state, action) => {
      state.isReviewLoading = action.payload;
    })
    .addCase(setError, (state, action) => {
      state.error = action.payload;
    });
});

export {reducer};

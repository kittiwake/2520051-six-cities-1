import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../constant';
import { fetchFavoritesAction, fetchOffersAction } from '../api-actions';
import { MainData } from '../../types/state';

const initialState: MainData = {
  offers: [],
  favorites: [],
  countFavorites: 0,
  isDataLoading: false,
  error: null,
};

export const mainData = createSlice({
  name: NameSpace.Main,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchOffersAction.fulfilled, (state, action) => {
        state.offers = action.payload;
        state.isDataLoading = false;
      })
      .addCase(fetchOffersAction.pending, (state) => {
        state.isDataLoading = true;
      })
      .addCase(fetchOffersAction.rejected, (state) => {
        state.isDataLoading = false;
        state.error = 'Ошибка загрузки';
      })
      .addCase(fetchFavoritesAction.fulfilled, (state, action) => {
        state.favorites = action.payload;
        state.countFavorites = state.favorites.length;
        state.isDataLoading = false;
      })
      .addCase(fetchFavoritesAction.pending, (state) => {
        state.isDataLoading = true;
      })
      .addCase(fetchFavoritesAction.rejected, (state) => {
        state.isDataLoading = false;
        state.error = 'Ошибка загрузки';
      });
  }
});

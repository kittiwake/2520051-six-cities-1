import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { cities, NameSpace } from '../../constant';
import { fetchFavoritesAction, fetchOffersAction } from '../api-actions';
import { MainData } from '../../types/state';
import { PlacesOption } from '../../transfers';

const initialState: MainData = {
  city: cities[0],
  sorting: PlacesOption.POPULAR,
  offers: [],
  favorites: [],
  countFavorites: 0,
  isDataLoading: false,
  error: null,
};

export const mainData = createSlice({
  name: NameSpace.Main,
  initialState,
  reducers: {
    setCity(state, action: PayloadAction<MainData['city']>) {
      state.city = action.payload;
    },
    setSorting(state, action: PayloadAction<string>) {
      state.sorting = action.payload;
    },

  },
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

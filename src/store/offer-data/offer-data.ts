import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../constant';
import { fetchNearbyOffersAction, fetchOfferAction } from '../api-actions';
import { OfferData } from '../../types/state';


const initialState: OfferData = {
  currentOffer: null,
  nearestOffers: [],
  isDataLoading: false,
  isNearestLoading: false,
  error: null,
};


export const offerData = createSlice({
  name: NameSpace.Offer,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchOfferAction.fulfilled, (state, action) => {
        state.currentOffer = action.payload;
        state.isDataLoading = false;
      })
      .addCase(fetchOfferAction.pending, (state) => {
        state.isDataLoading = true;
      })
      .addCase(fetchOfferAction.rejected, (state) => {
        state.error = 'Ошибка загрузки'; //добавить rejectWithValue в fetchOfferAction
        state.isDataLoading = false;
      })
      .addCase(fetchNearbyOffersAction.fulfilled, (state, action) => {
        state.nearestOffers = action.payload;
        state.isNearestLoading = false;
      })
      .addCase(fetchNearbyOffersAction.pending, (state) => {
        state.isNearestLoading = true;
      })
      .addCase(fetchNearbyOffersAction.rejected, (state) => {
        state.error = 'Ошибка загрузки';
        state.isNearestLoading = false;
      });
  }
});

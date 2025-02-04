import { createReducer, PayloadAction } from '@reduxjs/toolkit';
import { setCity, setSorting, setActiveCardId, loadOffers, setDataLoadingStatus } from './action';
import { cities } from '../constant';
import { PlacesOption } from '../transfers';
import { Offers } from '../types/main';

interface State {
  city: typeof cities[0];
  offers: Offers;
  sorting: string;
  activeCardId: string | null;
  isDataLoading: boolean;
}

const initialState: State = {
  city: cities[0],
  offers: [],
  sorting: PlacesOption.POPULAR,
  activeCardId: null,
  isDataLoading: false,
};

const reducer = createReducer(initialState, (builder) => {
  builder.addCase(setCity, (state, action) => {
    state.city = action.payload;
  });
  builder.addCase(setSorting, (state, action) => {
    state.sorting = action.payload;
  });
  builder.addCase(setActiveCardId, (state, action: PayloadAction<string | null>) => {
    state.activeCardId = action.payload;
  });
  builder.addCase(loadOffers, (state, action) => {
    state.offers = action.payload;
  });
  builder.addCase(setDataLoadingStatus, (state, action) => {
    state.isDataLoading = action.payload;
  });

});

export {reducer};

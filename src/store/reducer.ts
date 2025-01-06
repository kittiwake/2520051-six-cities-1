import { createReducer } from '@reduxjs/toolkit';
import { setCity, setSorting } from './action';
import { cities } from '../constant';
import { mock } from '../mocks';
import { PlacesOption } from '../transfers';


const initialState = {
  city: cities[0],
  offers: mock,
  sorting: PlacesOption.POPULAR,
};

const reducer = createReducer(initialState, (builder) => {
  builder.addCase(setCity, (state, action) => {
    state.city = action.payload;
  });
  builder.addCase(setSorting, (state, action) => {
    state.sorting = action.payload;
  });

});

export {reducer};

import { createReducer } from '@reduxjs/toolkit';
import { changeCity } from './action';
import { cities } from '../constant';
import { mock } from '../mocks';


const initialState = {
  city: cities[0],
  offers: mock
};

const reducer = createReducer(initialState, (builder) => {
  builder.addCase(changeCity, (state, action) => {
    state.city = action.payload;
  });

});

export {reducer};

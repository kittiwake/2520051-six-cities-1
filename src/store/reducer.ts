import { createReducer, PayloadAction } from '@reduxjs/toolkit';
import { setCity, setSorting, setActiveCardId } from './action';
import { cities } from '../constant';
import { mock } from '../mocks';
import { PlacesOption } from '../transfers';

interface State {
  city: typeof cities[0];
  offers: typeof mock;
  sorting: string;
  activeCardId: string | null;
}

const initialState: State = {
  city: cities[0],
  offers: mock,
  sorting: PlacesOption.POPULAR,
  activeCardId: null,
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
});

export {reducer};

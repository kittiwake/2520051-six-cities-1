import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { cities, NameSpace } from '../../constant';
import { PlacesOption } from '../../transfers';
import { MainProcess } from '../../types/state';


const initialState: MainProcess = {
  city: cities[0],
  sorting: PlacesOption.POPULAR,
};

export const mainProcess = createSlice({
  name: NameSpace.Main,
  initialState,
  reducers: {
    setCity(state, action: PayloadAction<MainProcess['city']>) {
      state.city = action.payload;
    },
    setSorting(state, action: PayloadAction<string>) {
      state.sorting = action.payload;
    },
  },
});

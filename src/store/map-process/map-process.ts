import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { NameSpace } from '../../constant';
import { MapProcess } from '../../types/state';


const initialState: MapProcess = {
  activeCardId: null,
};

export const mapProcess = createSlice({
  name: NameSpace.Map,
  initialState,
  reducers: {
    setActiveCardId(state, action: PayloadAction<string>) {
      state.activeCardId = action.payload;
    },
  },
});

export const { setActiveCardId } = mapProcess.actions;

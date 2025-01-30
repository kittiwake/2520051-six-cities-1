import {createAsyncThunk} from '@reduxjs/toolkit';
import { State, AppDispatch } from '../types/state';
import { AxiosInstance } from 'axios';
import { breakePoints } from '../constant';
import { Offers } from '../types/main';
import { loadOffers, setDataLoadingStatus } from './action';


export const fetchOffersAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchOffers',
  async (_arg, {dispatch, extra: api}) => {
    dispatch(setDataLoadingStatus(true));
    const {data} = await api.get<Offers>(breakePoints.OFFERS);
    dispatch(setDataLoadingStatus(false));
    dispatch(loadOffers(data));
  },
);

import { combineReducers } from '@reduxjs/toolkit';
import { offerData } from './offer-data/offer-data';
import { NameSpace } from '../constant';
import { mainData } from './main-data/main-data';
import { commentsData } from './comments-data/conmments-data';
import { userProcess } from './user-process/user-process';
import { mapProcess } from './map-process/map-process';

export const rootReducer = combineReducers({
  [NameSpace.Main]: mainData.reducer,
  [NameSpace.Offer]: offerData.reducer,
  [NameSpace.Comments]: commentsData.reducer,
  [NameSpace.Map]: mapProcess.reducer,
  [NameSpace.User]: userProcess.reducer,
});

import { combineReducers } from '@reduxjs/toolkit';
import { NameSpace } from '../const';
import { offerData } from '.';
import { appData } from '.';
import { favoriteData } from '.';
import { offersData } from '.';
import { userProcess } from '.';

const rootReducer = combineReducers({
  [NameSpace.App]: appData.reducer,
  [NameSpace.Favorite]: favoriteData.reducer,
  [NameSpace.Offer]: offerData.reducer,
  [NameSpace.Offers]: offersData.reducer,
  [NameSpace.User]: userProcess.reducer,
});

export { rootReducer };

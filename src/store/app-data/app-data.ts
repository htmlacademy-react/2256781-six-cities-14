import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { NameSpace } from '../../const';
import { TCityName, TSorting } from '../../types';
import { getActiveCityByDefault } from '../../utils';

type TAppData = {
  city: TCityName;
  sorting: TSorting;
};

const initialState: TAppData = {
  city: getActiveCityByDefault(),
  sorting: 'POPULAR',
};

const appData = createSlice({
  name: NameSpace.App,
  initialState,
  reducers: {
    assignCity: (state, action: PayloadAction<TCityName>) => {
      state.city = action.payload;
    },
    assignSorting: (state, action: PayloadAction<TSorting>) => {
      state.sorting = action.payload;
    },
  }
});

const { assignCity, assignSorting } = appData.actions;

export { appData, assignCity, assignSorting, type TAppData };

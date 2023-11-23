import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { NameSpace } from '../../const';
import { TCityName, TSorting } from '../../types';
import { getActiveCityByDefault } from '../../utils';

type TAppData = {
  error: string | null;
  city: TCityName;
  sorting: TSorting;
};

const initialState: TAppData = {
  error: null,
  city: getActiveCityByDefault(),
  sorting: 'POPULAR',
};

const appData = createSlice({
  name: NameSpace.App,
  initialState,
  reducers: {
    assignError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    },
    assignCity: (state, action: PayloadAction<TCityName>) => {
      state.city = action.payload;
    },
    assignSorting: (state, action: PayloadAction<TSorting>) => {
      state.sorting = action.payload;
    },
    redirectToRoute: () => { },
  }
});

const { assignError, assignCity, assignSorting } = appData.actions;

export { appData, assignError, assignCity, assignSorting };

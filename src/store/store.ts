import { configureStore } from '@reduxjs/toolkit';
import { reducer } from '.';
import { createAPI } from '../services/api';

export const api = createAPI();

const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: api,
      },
    }),
});

export { store };

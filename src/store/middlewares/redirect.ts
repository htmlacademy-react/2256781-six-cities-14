import { PayloadAction } from '@reduxjs/toolkit';
import { browserHistory } from '../../browser-history';
import { Middleware } from 'redux';
import { rootReducer } from '../root-reducer';
import { AppRoute, NameSpace } from '../../const';

type Reducer = ReturnType<typeof rootReducer>;

export const redirect: Middleware<unknown, Reducer> =
  () =>
    (next) =>
      (action: PayloadAction<AppRoute>) => {
        if (action.type === `${NameSpace.App}/redirectToRoute`) {
          browserHistory.push(action.payload);
        }

        return next(action);
      };

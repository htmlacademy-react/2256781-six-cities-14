import { createAction } from '@reduxjs/toolkit';
import { AppRoute, NameSpace } from '../const';

const redirectToRoute = createAction<AppRoute>(`${NameSpace.App}/redirectToRoute`);

export { redirectToRoute };

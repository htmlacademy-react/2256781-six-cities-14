import { NameSpace } from '../../const';
import { TState } from '../../types/state';

const selectError = (state: TState) => state[NameSpace.App].error;

const selectCity = (state: TState) => state[NameSpace.App].city;

const selectSorting = (state: TState) => state[NameSpace.App].sorting;

export { selectError, selectCity, selectSorting };

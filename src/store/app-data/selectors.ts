import { NameSpace } from '../../const';
import { TState } from '../../types/state';

const selectCity = (state: TState) => state[NameSpace.App].city;

const selectSorting = (state: TState) => state[NameSpace.App].sorting;

export { selectCity, selectSorting };

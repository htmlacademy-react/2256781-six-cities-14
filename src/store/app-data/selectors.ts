import { NameSpace } from '../../const';
import { TCityName, TSorting } from '../../types';
import { TState } from '../../types/state';

const selectCity = (state: Pick<TState, NameSpace.App>): TCityName => state[NameSpace.App].city;

const selectSorting = (state: Pick<TState, NameSpace.App>): TSorting => state[NameSpace.App].sorting;

export { selectCity, selectSorting };

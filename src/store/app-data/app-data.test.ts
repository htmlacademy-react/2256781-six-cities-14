import { TCityName, TSorting } from '../../types';
import { getActiveCityByDefault } from '../../utils';
import { TAppData, appData, assignCity, assignSorting } from './app-data';

describe('reducer: appData', () => {
  it('should return initial state with empty action', () => {
    const emptyAction = { type: '' };
    const expectedState: TAppData = {
      city: getActiveCityByDefault(),
      sorting: 'POPULAR',
    };

    expect(appData.reducer(expectedState, emptyAction)).toEqual(expectedState);
  });

  it('should return default initial state with empty action and undefined state', () => {
    const emptyAction = { type: '' };
    const expectedState: TAppData = {
      city: getActiveCityByDefault(),
      sorting: 'POPULAR',
    };

    expect(appData.reducer(undefined, emptyAction)).toEqual(expectedState);
  });

  it('should change city with "assignCity" action', () => {
    const initialState: TAppData = {
      city: 'Paris',
      sorting: 'POPULAR',
    };
    const expectedCity: TCityName = 'Amsterdam';

    const result = appData.reducer(initialState, assignCity(expectedCity));

    expect(result.city).toBe(expectedCity);
  });

  it('should change sorting with "assignSorting" action', () => {
    const initialState: TAppData = {
      city: 'Paris',
      sorting: 'POPULAR',
    };
    const expectedSorting: TSorting = 'TOP';

    const result = appData.reducer(initialState, assignSorting(expectedSorting));

    expect(result.sorting).toBe(expectedSorting);
  });
});

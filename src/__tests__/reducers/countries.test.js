import { countriesReducer, selectCountry } from '../../Redux/countries/countries';

describe('Reducer is working correctly', () => {
  test('countriesReducer should return initial state', () => {
    expect(countriesReducer(undefined, {})).toEqual({ countries: [] });
  });
  test('countriesReducer should update the state', () => {
    expect(countriesReducer(undefined, selectCountry('Serbia'))).toEqual({ countries: [], currentCountry: 'Serbia', loading: false });
  });
});

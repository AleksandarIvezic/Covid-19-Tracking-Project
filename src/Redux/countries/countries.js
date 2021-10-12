import getData from '../../helpers/getData';

const LOAD = 'covid-19-tracking-project/countries/LOAD';
const SELECT = 'covid-19-tracking-project/countries/SELECT';

const initialValue = {
  countries: [],
};

const countriesReducer = (state = initialValue, action) => {
  switch (action.type) {
    case LOAD:
      return {
        ...state,
        countries: action.payload,
      };
    case SELECT:
      return {
        ...state,
        currentCountry: action.payload,
      };
    default:
      return state;
  }
};

const loadCountries = (payload) => ({
  type: LOAD,
  payload,
});

const selectCountry = (payload) => ({
  type: SELECT,
  payload,
});

const loadCountriesThunk = () => async (dispatch) => {
  const data = await getData();
  const { countries } = data;
  if (countries) {
    dispatch(loadCountries(countries));
  }
};

export { countriesReducer, loadCountriesThunk, selectCountry };

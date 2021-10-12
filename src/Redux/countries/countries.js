import getData from '../../helpers/getData';

const LOAD = 'air-polution-app/countries/LOAD';

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
    default:
      return state;
  }
};

const loadCountries = (payload) => ({
  type: LOAD,
  payload,
});

const loadCountriesThunk = () => async (dispatch) => {
  const data = await getData();
  const { countries } = data;
  if (countries) {
    dispatch(loadCountries(countries));
  }
};

export { countriesReducer, loadCountriesThunk };

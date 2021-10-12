import getData from '../../helpers/getData';
import getHistoryData from '../../helpers/getHistoryData';

const LOAD = 'covid-19-tracking-project/countries/LOAD';
const SELECT = 'covid-19-tracking-project/countries/SELECT';
const HISTORY = 'covid-19-tracking-project/countries/HISTORY';

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
    case HISTORY:
      return {
        ...state,
        currentHistory: action.payload,
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

const loadHistory = (payload) => ({
  type: HISTORY,
  payload,
});

const loadCountriesThunk = () => async (dispatch) => {
  const data = await getData();
  const { countries } = data;
  if (countries) {
    dispatch(loadCountries(countries));
  }
};

const loadHistoryThunk = (current) => async (dispatch) => {
  const data = await getHistoryData(current);
  const { dates } = data;
  if (dates) {
    dispatch(loadHistory(dates));
  }
};

export {
  countriesReducer, loadCountriesThunk, selectCountry, loadHistoryThunk,
};

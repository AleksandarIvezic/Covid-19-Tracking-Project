import getData from '../../helpers/getData';
import getHistoryData from '../../helpers/getHistoryData';

const LOAD = 'covid-19-tracking-project/countries/LOAD';
const SELECT = 'covid-19-tracking-project/countries/SELECT';
const HISTORY = 'covid-19-tracking-project/countries/HISTORY';
const IS_LOADING = 'covid-19-tracking-project/countries/IS_LOADING';

const initialValue = {
  countries: [],
};

const countriesReducer = (state = initialValue, action) => {
  switch (action.type) {
    case IS_LOADING:
      return {
        ...state,
        loading: true,
      };
    case LOAD:
      return {
        ...state,
        countries: action.payload.countries,
        total: action.payload.total,
        loading: false,
      };
    case SELECT:
      return {
        ...state,
        currentCountry: action.payload,
        loading: false,
      };
    case HISTORY:
      return {
        ...state,
        currentHistory: action.payload,
        loading: false,
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

const isLoading = () => ({
  type: IS_LOADING,
});

const loadCountriesThunk = () => async (dispatch) => {
  const data = await getData();
  if (data) {
    dispatch(loadCountries(data));
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
  countriesReducer, loadCountriesThunk, selectCountry, loadHistoryThunk, isLoading,
};

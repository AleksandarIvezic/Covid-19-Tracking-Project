const LOAD = 'air-polution-app/countries/LOAD';

const initialValue = [];
const countriesReducer = (state = initialValue, action) => {
  switch (action.type) {
    case LOAD:
      return {
        ...state,
        countries: [action.payload],
      };
    default:
      return state;
  }
};

const load = (payload) => (
  {
    type: LOAD,
    payload,
  }
);

export { countriesReducer, load };

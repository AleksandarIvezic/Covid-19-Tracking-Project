import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { countriesReducer } from '../../Redux/countries/countries';
import Countries from '../../components/Countries';

const reducer = combineReducers({
  countriesReducer,
});

const store = createStore(
  reducer,
  applyMiddleware(logger, thunk),
);

describe('Countries', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(<Provider store={store}><Countries /></Provider>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});

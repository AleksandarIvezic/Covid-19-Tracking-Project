import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { Route } from 'react-router';
import store from '../../redux/storeConfig';
import CountryDetails from '../../components/CountryDetails';

describe('CountryDetails', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <BrowserRouter>
            <Route path="/country">
              <CountryDetails current="Serbia" img="https://raw.githubusercontent.com/djaiss/mapsicon/33ba28808f8d32b5bae0ffada9cadd07073852e1/all/serbia/vector.svg" />
            </Route>
          </BrowserRouter>
        </Provider>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});

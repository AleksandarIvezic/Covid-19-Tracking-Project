import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { Route } from 'react-router';
import store from '../../redux/storeConfig';
import LineChart from '../../components/Chart';

describe('LineChart', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <BrowserRouter>
            <Route path="/country">
              <LineChart chartData={['2021-10-10', '2021-10-10']} country="serbia" type="totalRecovered" />
            </Route>
          </BrowserRouter>
        </Provider>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});

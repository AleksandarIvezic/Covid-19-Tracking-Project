import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import store from '../../redux/storeConfig';
import Search from '../../components/Search';

describe('Search', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(<Provider store={store}><Search handleChange={() => 2 + 3} /></Provider>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});

import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import store from '../../redux/storeConfig';
import Countries from '../../components/Countries';

describe('Countries', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(<Provider store={store}><Countries /></Provider>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});

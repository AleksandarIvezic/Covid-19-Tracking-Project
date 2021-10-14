import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import store from '../../redux/storeConfig';
import Country from '../../components/Country';

describe('Country', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(<Provider store={store}><Country country="Serbia" totalConfirmed={7} handleClick={() => 2 + 3} /></Provider>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});

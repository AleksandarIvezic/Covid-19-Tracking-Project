import React from 'react';
import renderer from 'react-test-renderer';
import Search from '../../components/Search';

describe('Search', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(<Search handleChange={() => 2 + 3} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});

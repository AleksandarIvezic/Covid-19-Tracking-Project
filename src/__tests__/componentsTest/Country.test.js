import React from 'react';
import renderer from 'react-test-renderer';
import Country from '../../components/Country';

describe('Country', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(<Country country="Serbia" totalConfirmed={7} handleClick={() => 2 + 3} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});

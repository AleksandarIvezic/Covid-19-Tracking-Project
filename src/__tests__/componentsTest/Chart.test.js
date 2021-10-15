import React from 'react';
import renderer from 'react-test-renderer';
import LineChart from '../../components/Chart';

describe('LineChart', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(
        <LineChart
          chartData={[545, 345]}
          country="serbia"
          type="totalRecovered"
        />,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});

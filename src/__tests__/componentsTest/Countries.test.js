import React from 'react';
import renderer from 'react-test-renderer';
import Countries from '../../components/Countries';

const countriesMock = {
  Afganistan: {
    new_cases: 23,
    deaths: 2,
    today_confirmed: 23432,
  },
  Albania: {
    new_cases: 13,
    new_deaths: 0,
    today_confirmed: 23432,
  },
};

const totalMock = {
  today_confirmed: 23432,
  today_deaths: 4878813,
  today_new_confirmed: 439801,
};

describe('Countries', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(
        <Countries
          countries={countriesMock}
          total={totalMock}
          loading={false}
          handleClick={() => 2 + 3}
        />,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});

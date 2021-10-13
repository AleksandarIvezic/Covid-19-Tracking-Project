import React from 'react';
import PropTypes from 'prop-types';
import LineChart from './Chart';

const NewCases = ({ data, country }) => {
  const usedata = data[0];
  console.log('usedata', usedata);
  return (
    <div>
      <h3>{usedata}</h3>
      <h4>{country}</h4>
      <h5> New cases</h5>
      <LineChart chartData={data} type="new Cases" />
    </div>
  );
};

NewCases.propTypes = {
  data: PropTypes.arrayOf(PropTypes.number).isRequired,
  country: PropTypes.string.isRequired,
};

export default NewCases;

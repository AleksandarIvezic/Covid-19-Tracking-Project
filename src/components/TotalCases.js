import React from 'react';
import PropTypes from 'prop-types';
import LineChart from './Chart';

const NewCases = ({ data, country }) => (
  <div>
    <h4>{country}</h4>
    <h5> Total cases</h5>
    <LineChart chartData={data} type="total Cases" />
  </div>
);

NewCases.propTypes = {
  data: PropTypes.arrayOf(PropTypes.number).isRequired,
  country: PropTypes.string.isRequired,
};

export default NewCases;

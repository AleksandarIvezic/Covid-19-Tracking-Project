import React from 'react';
import PropTypes from 'prop-types';
import LineChart from './Chart';

const Recovered = ({ data, country }) => (
  <div>
    <h4>{country}</h4>
    <h5> Recovered population</h5>
    <LineChart chartData={data} type="recovered people" />
  </div>
);

Recovered.propTypes = {
  data: PropTypes.arrayOf(PropTypes.number).isRequired,
  country: PropTypes.string.isRequired,
};

export default Recovered;

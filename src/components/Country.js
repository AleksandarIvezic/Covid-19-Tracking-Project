import React from 'react';
import PropTypes from 'prop-types';

const Country = ({ current }) => {
  const data = 'data';
  return (
    <div>
      <span>{data}</span>
      <h3>{current}</h3>
    </div>
  );
};

Country.propTypes = {
  current: PropTypes.string.isRequired,
};

export default Country;

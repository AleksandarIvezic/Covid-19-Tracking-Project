import React from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import '../styling/Country.css';

const Country = ({ country, totalConfirmed }) => {
  const history = useHistory();
  const handleRoute = (route) => {
    history.push(route);
  };

  return (
    <button className="position-relative country " type="button" onClick={() => handleRoute('/country')}>
      <img className="c-img" src="virus-img.png" alt="virus" width="50" height="50" />
      <div className="text d-flex flex-column justify-content-center">
        <span>{country}</span>
        <span>{totalConfirmed}</span>
      </div>
      <i className="far fa-arrow-alt-circle-right position-absolute top-0 end-0"> </i>
    </button>
  );
};

Country.propTypes = {
  country: PropTypes.string.isRequired,
  totalConfirmed: PropTypes.number.isRequired,
};

export default Country;

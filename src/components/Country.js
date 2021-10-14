import React from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import '../styling/Country.css';
import countryIso from '../libraries/countryIso';

const Country = ({ country, totalConfirmed, handleClick }) => {
  const history = useHistory();
  const handleRoute = (route) => {
    history.push(route);
  };

  const iso = countryIso[country];

  const link = iso ? `https://raw.githubusercontent.com/djaiss/mapsicon/33ba28808f8d32b5bae0ffada9cadd07073852e1/all/${iso.toLowerCase()}/vector.svg` : '/World_map.png';

  return (
    <button
      className="country position-relative country text-light"
      type="button"
      onClick={() => {
        handleRoute('/country');
        handleClick(country);
      }}
    >
      <img className="c-img" src={link} alt="country" width="100" height="100" />
      <div className="bottom d-flex justify-content-end">
        <div className="text d-flex flex-column justify-content-center">
          <span className="fw-bold text-uppercase">{country}</span>
          <span>{Intl.NumberFormat('de-DE').format(totalConfirmed)}</span>
        </div>
      </div>
      <i className="far fa-arrow-alt-circle-right position-absolute top-0 end-0 p-2"> </i>
    </button>
  );
};

Country.propTypes = {
  country: PropTypes.string.isRequired,
  totalConfirmed: PropTypes.number.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default Country;

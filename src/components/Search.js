import React from 'react';
import PropTypes from 'prop-types';
import '../styling/Search.css';

const Search = ({ handleChange }) => (
  <form className="d-flex stripe-text justify-content-between">
    <span className="m-1">STATS BY COUNTRY</span>
    <input name="search" type="text" placeholder="Search" onChange={handleChange} />
  </form>
);

Search.propTypes = {
  handleChange: PropTypes.func.isRequired,
};

export default Search;

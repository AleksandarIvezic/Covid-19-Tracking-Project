import React from 'react';
import PropTypes from 'prop-types';

const Search = ({ handleChange }) => (
  <form>
    <input type="text" placeholder="Search" onChange={handleChange} />
  </form>
);

Search.propTypes = {
  handleChange: PropTypes.func.isRequired,
};

export default Search;

import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Country from './Country';
import Search from './Search';
import '../styling/Countries.css';

const Countries = ({
  countries, total, loading, handleClick,
}) => {
  const [filteredCountries, setFilteredCountries] = useState(Object.keys(countries));

  useEffect(() => {
    setFilteredCountries(Object.keys(countries));
  }, [countries]);

  const filterCountries = (text) => Object.keys(countries).filter((country) => {
    const regex = new RegExp(text, 'gi');
    return country.match(regex);
  });
  const handleChange = (e) => setFilteredCountries(filterCountries(e.target.value));

  return (
    <div>
      <div className="header d-flex p-1">
        <img className="c-img" src="World_map_svg.svg" alt="world-map" width="50%" height="50%" />
        <div className="right-side d-flex flex-column align-items-center justify-content-center w-50 fw-bold">
          <h1 className="m-0 fs-3 lh-1 fw-bolder">WORLD</h1>
          <span className="lh-1">
            {total && Intl.NumberFormat('de-DE').format(total.today_confirmed)}
          </span>
          <span className="lh-1">total cases</span>
        </div>
      </div>
      <Search handleChange={handleChange} />
      {loading && <img className="loading-img" src="virus-img.png" alt="loader" />}
      <ul className="d-flex flex-wrap">
        {filteredCountries && filteredCountries.map((key) => (
          (key !== 'Kosovo')
          && (
            <li key={key} className="w-50">
              <Country
                country={key}
                totalConfirmed={countries[key].today_confirmed}
                handleClick={handleClick}
              />
            </li>
          )
        ))}
      </ul>
      {!filteredCountries.length
      && !loading
      && <h3>SORRY, WE DON&apos;T HAVE RESULTS FOR YOUR SERCH!!! :(</h3>}
    </div>
  );
};

Countries.defaultProps = {
  loading: true,
  total: {},
};

Countries.propTypes = {
  countries: PropTypes.objectOf(PropTypes.object).isRequired,
  total: PropTypes.shape({
    today_confirmed: PropTypes.number,
  }),
  loading: PropTypes.bool,
  handleClick: PropTypes.func.isRequired,
};

export default Countries;

import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { loadCountriesThunk, selectCountry, isLoading } from '../Redux/countries/countries';
import Country from './Country';
import Search from './Search';
import '../styling/Countries.css';

const Countries = () => {
  const countries = useSelector((state) => state.countriesReducer.countries);
  const total = useSelector((state) => state.countriesReducer.total);
  const dispatch = useDispatch();
  const [filteredCountries, setFilteredCountries] = useState(Object.keys(countries));

  useEffect(() => {
    dispatch(isLoading());
    dispatch(loadCountriesThunk());
  }, [dispatch]);

  useEffect(() => {
    setFilteredCountries(Object.keys(countries));
  }, [countries]);

  const handleClick = (country) => dispatch(selectCountry(country));

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
    </div>
  );
};

export default Countries;

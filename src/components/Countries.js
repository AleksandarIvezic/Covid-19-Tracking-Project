import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { loadCountriesThunk, selectCountry } from '../Redux/countries/countries';
import Country from './Country';
import Search from './Search';

const Countries = () => {
  const countries = useSelector((state) => state.countriesReducer.countries);
  const dispatch = useDispatch();
  const [filteredCountries, setFilteredCountries] = useState(Object.keys(countries));

  useEffect(() => {
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
      <span>Select a country</span>
      <Search handleChange={handleChange} />
      <ul className="d-flex flex-wrap">
        {filteredCountries && filteredCountries.map((key) => (
          <li key={key} className="w-50">
            <Country
              country={key}
              totalConfirmed={countries[key].today_confirmed}
              handleClick={handleClick}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Countries;

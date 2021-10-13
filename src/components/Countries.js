import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { loadCountriesThunk, selectCountry } from '../Redux/countries/countries';
import Country from './Country';

const Countries = () => {
  const countries = useSelector((state) => state.countriesReducer.countries);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadCountriesThunk());
  }, [dispatch]);

  const handleClick = (country) => dispatch(selectCountry(country));

  return (
    <div>
      <span>Select a country</span>
      <ul className="d-flex flex-wrap">
        {Object.keys(countries).map((key) => (
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

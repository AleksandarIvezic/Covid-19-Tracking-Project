import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { loadCountriesThunk, selectCountry } from '../Redux/countries/countries';

const Countries = () => {
  const countries = useSelector((state) => state.countriesReducer.countries);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadCountriesThunk());
  }, [dispatch]);

  const handleClick = (country) => dispatch(selectCountry(country));
  return (
    <div>
      <span>Countries</span>
      <ul>
        {Object.keys(countries).map((key) => (
          <li key={key}>
            <Link
              to="/country"
              onClick={() => handleClick(key)}
            >
              {key}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Countries;

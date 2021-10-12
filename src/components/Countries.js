import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { loadCountriesThunk } from '../Redux/countries/countries';

const Countries = () => {
  const countries = useSelector((state) => state.countriesReducer.countries);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadCountriesThunk());
  }, [dispatch]);
  return (
    <div>
      <span>Countries</span>
      <ul>
        {Object.keys(countries).map((key) => (
          <li key={key}>{key}</li>
        ))}
      </ul>
    </div>
  );
};

export default Countries;

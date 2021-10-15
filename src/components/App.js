import React, { useEffect } from 'react';
import '../styling/App.css';
import { Route, Switch } from 'react-router';
import { useSelector, useDispatch } from 'react-redux';
import Navbar from './Navbar';
import Countries from './Countries';
import CountryDetails from './CountryDetails';
import countryIso from '../libraries/countryIso';
import { loadCountriesThunk, selectCountry, isLoading } from '../Redux/countries/countries';

function App() {
  const countries = useSelector((state) => state.countriesReducer.countries);
  const total = useSelector((state) => state.countriesReducer.total);
  const loading = useSelector((state) => state.countriesReducer.loading);
  const currentCountry = useSelector((state) => state.countriesReducer.currentCountry);
  const iso = countryIso[currentCountry];
  const imgLink = iso ? `https://raw.githubusercontent.com/djaiss/mapsicon/33ba28808f8d32b5bae0ffada9cadd07073852e1/all/${iso.toLowerCase()}/vector.svg` : '/World_map.png';
  const dispatch = useDispatch();

  const handleClick = (country) => dispatch(selectCountry(country));

  useEffect(() => {
    dispatch(isLoading());
    dispatch(loadCountriesThunk());
  }, [dispatch]);
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Countries
            countries={countries}
            total={total}
            loading={loading}
            handleClick={handleClick}
          />
        </Route>
        <Route path="/country">
          <CountryDetails current={currentCountry} img={imgLink} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;

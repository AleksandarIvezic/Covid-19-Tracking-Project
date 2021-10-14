import '../styling/App.css';
import { Route, Switch } from 'react-router';
import { useSelector } from 'react-redux';
import Navbar from './Navbar';
import Countries from './Countries';
import CountryDetails from './CountryDetails';
import countryIso from '../libraries/countryIso';

function App() {
  const currentCountry = useSelector((state) => state.countriesReducer.currentCountry);
  const iso = countryIso[currentCountry];
  const imgLink = iso ? `https://raw.githubusercontent.com/djaiss/mapsicon/33ba28808f8d32b5bae0ffada9cadd07073852e1/all/${iso.toLowerCase()}/vector.svg` : '/World_map.png';
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Countries />
        </Route>
        <Route path="/country">
          <CountryDetails current={currentCountry} img={imgLink} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;

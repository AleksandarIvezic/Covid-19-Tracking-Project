import '../styling/App.css';
import { Route, Switch } from 'react-router';
import { useSelector } from 'react-redux';
import Navbar from './Navbar';
import Countries from './Countries';
import Country from './Country';

function App() {
  const currentCountry = useSelector((state) => state.countriesReducer.currentCountry);
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Countries />
        </Route>
        <Route path="/country">
          <Country current={currentCountry} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;

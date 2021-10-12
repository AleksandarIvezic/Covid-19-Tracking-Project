import '../styling/App.css';
import { Route, Switch } from 'react-router';
import { useSelector } from 'react-redux';
import Navbar from './Navbar';
import Countries from './Countries';
import Country from './Country';
import NewCases from './NewCases';

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
        <Route path="/newCases">
          <NewCases />
        </Route>
      </Switch>
    </div>
  );
}

export default App;

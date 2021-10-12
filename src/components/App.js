import '../styling/App.css';
import { Route, Switch } from 'react-router';
import { Provider } from 'react-redux';
import store from '../Redux/storeConfig';
import Navbar from './Navbar';
import Countries from './Countries';
import States from './States';
import Cities from './Cities';
import City from './City';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Countries />
          </Route>
          <Route path="/states">
            <States />
          </Route>
          <Route path="states/cities">
            <Cities />
          </Route>
          <Route paht="states/cities/city">
            <City />
          </Route>
        </Switch>
      </div>
    </Provider>
  );
}

export default App;

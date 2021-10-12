import '../styling/App.css';
import { Provider } from 'redux';
import store from '../Redux/storeConfig';
import Navbar from './Navbar';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Navbar />
        <h2>All countries</h2>
      </div>
    </Provider>
  );
}

export default App;

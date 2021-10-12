import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import { loadHistoryThunk } from '../Redux/countries/countries';

const Country = ({ current }) => {
  const dispatch = useDispatch();
  const countryData = useSelector((state) => state.countriesReducer.countries[current]);
  const [data, setData] = useState(countryData);

  const historyData = useSelector((state) => state.countriesReducer.currentHistory);
  const handleClick = (obj) => setData(historyData[obj].countries[current]);

  const history = useHistory();
  const handleRoute = (route) => {
    history.push(route);
  };
  useEffect(() => {
    dispatch(loadHistoryThunk(current));
  }, [dispatch]);
  console.log('history', data);
  return (
    <div>

      <h3>{current}</h3>
      <table className="table">
        <tbody>
          <tr>
            <td>Date</td>
            <td>{data.date}</td>
          </tr>
          <tr onClick={() => handleRoute('/newCases')}>
            <td>New cases</td>
            <td>{data.today_new_confirmed}</td>
            <td>&gt;</td>
          </tr>
          <tr>
            <td>Recovered</td>
            <td>{data.today_new_recovered}</td>
          </tr>
          <tr>
            <td>Deaths</td>
            <td>{data.today_new_deaths}</td>
          </tr>
        </tbody>
      </table>
      <h4>Check history</h4>
      <ul>
        {historyData && Object.keys(historyData).map((date) => (
          <li
            key={date}
          >
            {date}
            <button type="button" onClick={() => handleClick(date)}>details</button>
          </li>
        ))}
      </ul>

    </div>
  );
};

Country.propTypes = {
  current: PropTypes.string.isRequired,
};

export default Country;

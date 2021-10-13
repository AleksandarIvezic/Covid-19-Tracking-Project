import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import { Route, Switch, useRouteMatch } from 'react-router';
import { loadHistoryThunk } from '../Redux/countries/countries';
import NewCases from './NewCases';

const CountryDetails = ({ current }) => {
  const dispatch = useDispatch();
  const countryData = useSelector((state) => state.countriesReducer.countries[current]);
  const [chartData, setChartData] = useState([]);
  const historyData = useSelector((state) => state.countriesReducer.currentHistory);
  const history = useHistory();
  const { path, url } = useRouteMatch();

  const tableRows = [
    {
      id: 1,
      text: 'New cases',
      value: countryData.today_new_confirmed,
      url: 'newCases',
      category: 'today_new_confirmed',
    },
    {
      id: 2,
      text: 'Recovered',
      value: countryData.today_new_recovered,
      url: 'recovered',
      category: 'today_new_recovered',
    },
    {
      id: 3,
      text: 'Deaths',
      value: countryData.today_new_deaths,
      url: 'deaths',
      category: 'today_new_deaths',
    },
    {
      id: 4,
      text: 'Total cases',
      value: countryData.today_confirmed,
      url: 'totalCases',
      category: 'today_confirmed',
    },
    {
      id: 5,
      text: 'Total recovered',
      value: countryData.today_recovered,
      url: 'totalRecovered',
      category: 'today_recovered',
    },
    {
      id: 5,
      text: 'Total deaths',
      value: countryData.today_deaths,
      url: 'totalDeaths',
      category: 'today_deaths',
    },
  ];

  const handleRoute = (route) => {
    history.push(route);
  };

  const handleChartData = (category) => {
    const dataArr = Object.keys(historyData).map((date) => {
      const value = historyData[date].countries[current][category];
      return value;
    });
    setChartData(dataArr);
  };

  useEffect(() => {
    dispatch(loadHistoryThunk(current));
  }, [dispatch]);

  return (
    <div>

      <Switch>
        <Route exact path={path}>
          <div className="wrapper">
            <h3>{current}</h3>
            <table className="table">
              <tbody>
                <tr>
                  <td>Date</td>
                  <td>{countryData.date}</td>
                  <td> </td>
                </tr>
                {tableRows.map((tableData) => (
                  <tr
                    key={tableData.id}
                    onClick={() => {
                      handleRoute(`${url}/${tableData.url}`);
                      handleChartData(tableData.category);
                    }}
                  >
                    <td>{tableData.text}</td>
                    <td>{tableData.value}</td>
                    <td><i className="far fa-arrow-alt-circle-right "> </i></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Route>
        <Route exact path={`${path}/newCases`}>
          <NewCases data={chartData} country={current} />
        </Route>
      </Switch>
    </div>
  );
};

CountryDetails.propTypes = {
  current: PropTypes.string.isRequired,
};

export default CountryDetails;

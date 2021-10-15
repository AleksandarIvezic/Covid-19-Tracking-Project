import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import { Route, Switch, useRouteMatch } from 'react-router';
import { loadHistoryThunk, isLoading } from '../Redux/countries/countries';
import LineChart from './Chart';
import '../styling/CountryDetails.css';

const CountryDetails = ({ current, img }) => {
  const dispatch = useDispatch();
  const countryData = useSelector((state) => state.countriesReducer.countries[current]);
  const historyData = useSelector((state) => state.countriesReducer.currentHistory);
  const loading = useSelector((state) => state.countriesReducer.loading);
  const [chartData, setChartData] = useState([]);
  const history = useHistory();
  const { path, url } = useRouteMatch();
  const total = countryData.today_confirmed;

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
      id: 6,
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
    dispatch(isLoading());
    dispatch(loadHistoryThunk(current));
  }, [dispatch]);

  return (
    <div>
      <div className="header d-flex p-1">
        <img
          className="p-4 c-img"
          src={img}
          alt="world-map"
          width="50%"
          height="50%"
        />
        <div className="right-side d-flex flex-column align-items-center justify-content-center w-50 fw-bold">
          <h1 className="m-0 fs-3 lh-1 fw-bolder">{current}</h1>
          <span className="lh-1">
            {total && Intl.NumberFormat('de-DE').format(total)}
          </span>
          <span className="lh-1">total cases</span>
        </div>
      </div>
      <Switch>
        <Route exact path={path}>
          <div className="wrapper">
            <div className="d-flex stripe-text justify-content-between">
              <span className="m-1">LATEST STATS</span>
            </div>
            <table className="table text-light border-0 align-middle ">
              <tbody>
                <tr>
                  <td>Date</td>
                  <td>{countryData.date}</td>
                  <td> </td>
                </tr>
                {loading && <img className="loading-img" src="virus-img.png" alt="loader" />}
                {!loading && tableRows.map((tableData) => (
                  <tr
                    className="pointer"
                    key={tableData.id}
                    onClick={() => {
                      handleRoute(`${url}/${tableData.url}`);
                      handleChartData(tableData.category);
                    }}
                  >
                    <td>{tableData.text}</td>
                    <td>{tableData.value}</td>
                    <td>
                      <i className="far fa-arrow-alt-circle-right "> </i>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Route>
        <Route exact path={`${path}/newCases`}>
          <LineChart chartData={chartData} country={current} type="new Cases" />
        </Route>
        <Route exact path={`${path}/recovered`}>
          <LineChart chartData={chartData} country={current} type="recovered" />
        </Route>
        <Route exact path={`${path}/deaths`}>
          <LineChart chartData={chartData} country={current} type="deaths" />
        </Route>
        <Route exact path={`${path}/totalCases`}>
          <LineChart chartData={chartData} country={current} type="totalCases" />
        </Route>
        <Route exact path={`${path}/totalRecovered`}>
          <LineChart chartData={chartData} country={current} type="totalRecovered" />
        </Route>
        <Route exact path={`${path}/totalDeaths`}>
          <LineChart chartData={chartData} country={current} type="totalDeaths" />
        </Route>
      </Switch>
    </div>
  );
};

CountryDetails.defaultProps = {
  current: 'Country unknown',
};

CountryDetails.propTypes = {
  current: PropTypes.string,
  img: PropTypes.string.isRequired,
};

export default CountryDetails;

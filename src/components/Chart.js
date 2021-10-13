import React from 'react';
import { Line } from 'react-chartjs-2';
import PropTypes from 'prop-types';

const options = {
  scales: {
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
        },
      },
    ],
  },
};

const LineChart = ({ chartData, type }) => {
  const data = {
    labels: ['1', '2', '3', '4', '5', '6', '7'],
    datasets: [
      {
        label: `# of ${type}`,
        data: chartData,
        fill: false,
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgba(255, 99, 132, 0.2)',
      },
    ],
  };
  return (
    <>
      <div className="header">
        <h6>Last 7 days view</h6>
      </div>
      <Line data={data} options={options} />
    </>
  );
};

LineChart.propTypes = {
  chartData: PropTypes.arrayOf(PropTypes.number).isRequired,
  type: PropTypes.string.isRequired,
};

export default LineChart;

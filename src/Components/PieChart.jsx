import React from 'react';
import { Doughnut } from 'react-chartjs-2';

const PieChart = () => {
  const data = {
    labels: ['Label 1', 'Label 2', 'Label 3'],
    datasets: [
      {
        data: [30, 40, 30], // Replace with your data values
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
        hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
  };

  return <Doughnut data={data} options={options} />;
};

export default PieChart;

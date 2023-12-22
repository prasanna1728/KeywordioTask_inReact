import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart, ArcElement } from 'chart.js'
Chart.register(ArcElement);


const data = {
  labels: ['Impressions', 'Clicks', 'Conversions'],
  datasets: [
    {
      data: [40, 35, 25],
      backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
      hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
    },
  ],
};

const options = {
  responsive: true,
  maintainAspectRatio: false,
  width: 800, // Set the desired width
  height: 800, // Set the desired height
};
function DoughnutChart() {
  return (
    <>
      <div style={{ display: 'flex', marginTop:"200px" }}>
        <div style={{ flex: 1 }}>
          <Pie data={data} options={options} />
        </div>
        <div style={{ flex: 1, marginLeft: '20px' }}>
          <ul>
            <li>
              <strong>Label 1:</strong> 40% Male
            </li>
            <li>
              <strong>Label 2:</strong> 35% Female
            </li>
            <li>
              <strong>Label 3:</strong> 25% Unknown
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
export default DoughnutChart;
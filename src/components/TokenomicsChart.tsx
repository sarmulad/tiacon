import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart, DoughnutController } from 'chart.js/auto';

Chart.register(DoughnutController);

type TokenomicsProps = {
  data: number[];
  labels: string[];
};

const TokenomicsChart: React.FC<TokenomicsProps> = ({ data, labels }) => {
  const chartData = {
    labels,
    datasets: [
      {
        data,
        backgroundColor: ['#ff6384', '#36a2eb', '#ffce56', '#8ec46b', '#58304E', '#B3B486','#CD5F5B'],
        borderWidth: 0,
      },
    ],
  };

  const options = {
    responsive: true,
    // height: 500, // set to desired height
    // width: 800, // set to desired width
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: true,
        position: 'bottom',
        labels: {
          font: {
            size: 10,
          },
        },
      },
    },
  };

  return <Doughnut data={chartData} options={options} />;
};

export default TokenomicsChart;

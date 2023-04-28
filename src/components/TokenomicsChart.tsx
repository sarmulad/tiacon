import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { CoreChartOptions, DatasetChartOptions, ElementChartOptions, PluginChartOptions, ScaleChartOptions } from "chart.js";
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
        backgroundColor: ['#ff6384', '#36a2eb', '#ffce56', '#8ec46b', '#58304E', '#B3B486','#8ec46b'],
        borderWidth: 0,
      },
    ],
  };

  const options: CoreChartOptions<"doughnut"> & ElementChartOptions<"doughnut"> & PluginChartOptions<"doughnut"> & DatasetChartOptions<"doughnut"> & ScaleChartOptions<"linear"> & DoughnutControllerChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: true,
        position: 'bottom',
        labels: {
          font: {
            size: 14
          }
        }
      }
    }
  };

  return <Doughnut data={chartData} options={options} />;
};

export default TokenomicsChart;

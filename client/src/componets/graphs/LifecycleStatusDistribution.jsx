import React from 'react';
import { Doughnut } from 'react-chartjs-2';

const LifecycleStatusDistribution = ({ data, onClose }) => {
  const lifecycleStatuses = data.reduce((acc, asset) => {
    acc[asset['Lifecycle Status']] = (acc[asset['Lifecycle Status']] || 0) + 1;
    return acc;
  }, {});

  const chartData = {
    labels: Object.keys(lifecycleStatuses),
    datasets: [
      {
        label: 'Lifecycle Status Distribution',
        data: Object.values(lifecycleStatuses),
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF'],
      },
    ],
  };

  const options = {
    maintainAspectRatio: false,
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">Lifecycle Status Distribution</h2>
        <button onClick={onClose} className="text-gray-500 hover:text-gray-700 focus:outline-none">
          Back to Overview
        </button>
      </div>
      <div style={{ height: '300px',width:"450px" }}>
        <Doughnut data={chartData} options={options} />
      </div>
    </div>
  );
};

export default LifecycleStatusDistribution;

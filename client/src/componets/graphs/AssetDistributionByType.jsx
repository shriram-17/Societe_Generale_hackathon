import React from 'react';
import { Pie } from 'react-chartjs-2';

const AssetDistributionByType = ({ data, onClose }) => {
  const assetTypes = data.reduce((acc, asset) => {
    acc[asset['Asset Type']] = (acc[asset['Asset Type']] || 0) + 1;
    return acc;
  }, {});

  const chartData = {
    labels: Object.keys(assetTypes),
    datasets: [
      {
        label: 'Asset Distribution by Type',
        data: Object.values(assetTypes),
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0'],
      },
    ],
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">Asset Distribution by Type</h2>
        <button onClick={onClose} className="text-gray-500 hover:text-gray-700 focus:outline-none">
          Back to Overview
        </button>
      </div>
      <div style={{ height: '300px',width:"500px" }}>
      <Pie data={chartData} />
      <div/>
    </div>
    </div>
  );
};

export default AssetDistributionByType;

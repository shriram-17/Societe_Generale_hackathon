import React from 'react';
import { Bar } from 'react-chartjs-2';

const TotalCostsByAssetType = ({ data, onClose }) => {
  const assetTypes = data.reduce((acc, asset) => {
    if (!acc[asset['Asset Type']]) {
      acc[asset['Asset Type']] = { maintenance: 0, replacement: 0 };
    }
    acc[asset['Asset Type']].maintenance += asset['Maintenance Cost'];
    acc[asset['Asset Type']].replacement += asset['Replacement Cost'];
    return acc;
  }, {});

  const chartData = {
    labels: Object.keys(assetTypes),
    datasets: [
      {
        label: 'Total Maintenance Cost',
        data: Object.values(assetTypes).map(a => a.maintenance),
        backgroundColor: '#36A2EB',
      },
      {
        label: 'Total Replacement Cost',
        data: Object.values(assetTypes).map(a => a.replacement),
        backgroundColor: '#FF6384',
      },
    ],
  };

  const options = {
    maintainAspectRatio: false,
    scales: {
      x: {
        stacked: true,
      },
      y: {
        stacked: true,
      },
    },
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">Total Costs by Asset Type</h2>
        <button onClick={onClose} className="text-gray-500 hover:text-gray-700 focus:outline-none">
          Back to Overview
        </button>
      </div>
      <div style={{ height: '300px',width:"500px" }}>
        <Bar data={chartData} options={options} />
      </div>
    </div>
  );
};

export default TotalCostsByAssetType;

import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const AgeOfAssets = ({ data, onClose }) => {
  const chartRef = useRef(null);

  useEffect(() => {
    if (chartRef.current && chartRef.current.chartInstance) {
      chartRef.current.chartInstance.destroy();
    }

    const sampledData = data.filter((_, index) => index % 100 === 0);
    
    const currentYear = new Date().getFullYear();
    const assetAges = sampledData.map(asset => currentYear - new Date(asset['Purchase Date']).getFullYear());

    const chartData = {
      labels: sampledData.map(asset => asset['Asset ID']),
      datasets: [
        {
          label: 'Age of Assets',
          data: assetAges,
          backgroundColor: '#4BC0C0',
          borderColor: '#4BC0C0',
          fill: false,
        },
      ],
    };

    const options = {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true,
          },
        }],
      },
    };

    const newChartInstance = new Chart(chartRef.current, {
      type: 'line',
      data: chartData,
      options: options,
    });

    chartRef.current.chartInstance = newChartInstance;

    return () => {
      if (chartRef.current && chartRef.current.chartInstance) {
        chartRef.current.chartInstance.destroy();
      }
    };
  }, [data]);

  return (
    <div className="bg-white p-10 rounded-lg shadow-md">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">Age of Assets</h2>
        <button onClick={onClose} className="text-gray-500 hover:text-gray-700 focus:outline-none">
          Back to Overview
        </button>
      </div>
      <div style={{ position: 'relative', width: '1000px', height: '400px' }}>
        <canvas ref={chartRef} />
      </div>
    </div>
  );
};

export default AgeOfAssets;

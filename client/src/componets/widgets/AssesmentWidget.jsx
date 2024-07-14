import React, { useState } from 'react';
import axios from 'axios';

const AssessmentWidget = () => {
  const [formData, setFormData] = useState({
    PurchaseDate: '',
    MaintenanceCostRatio: '',
    ReplacementCost: '',
    AssetType: '',
  });

  const [predictionType, setPredictionType] = useState('');
  const [response, setResponse] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handlePredictionTypeChange = (e) => {
    setPredictionType(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const purchaseDate = new Date(formData.PurchaseDate);
    const currentDate = new Date();
    const ageOfAsset = currentDate.getFullYear() - purchaseDate.getFullYear();

    const data = {
      Age_of_Asset: ageOfAsset,
      Maintenance_Cost: parseFloat(formData.MaintenanceCostRatio),
      Replacement_Cost: parseFloat(formData.ReplacementCost),
      Asset_Type: formData.AssetType,
      Lifecycle_Status: 'Active',
    };

    let endpoint = '';
    if (predictionType === 'maintenance') {
      endpoint = '/predict/maintenance';
    } else if (predictionType === 'acquisition') {
      endpoint = '/predict/acquisition';
    } else if (predictionType === 'retirement') {
      endpoint = '/predict/retirement';
    }

    axios.post(`http://localhost:8000${endpoint}`, data)
      .then(response => {
        setResponse(response.data);
        setFormData({
          PurchaseDate: '',
          MaintenanceCostRatio: '',
          ReplacementCost: '',
          AssetType: '',
        });
        setPredictionType('');
      })
      .catch(error => {
        console.error('There was an error!', error);
      });
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-md w-2/3 mx-auto my-4 flex flex-col items-center">
      <h2 className="text-xl font-bold mb-4">Asset Details</h2>
      <form onSubmit={handleSubmit} className="w-full flex flex-col items-center">
        <div className="mb-6 w-1/3">
          <label htmlFor="PurchaseDate" className="block text-lg font-medium text-gray-700 mb-2">
            Purchase Date
          </label>
          <input
            type="date"
            id="PurchaseDate"
            name="PurchaseDate"
            value={formData.PurchaseDate}
            onChange={handleInputChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-lg"
          />
        </div>
        <div className="mb-6 w-1/3">
          <label htmlFor="MaintenanceCostRatio" className="block text-lg font-medium text-gray-700 mb-2">
            Maintenance Cost 
          </label>
          <input
            type="number"
            id="MaintenanceCostRatio"
            name="MaintenanceCostRatio"
            value={formData.MaintenanceCostRatio}
            onChange={handleInputChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-lg"
          />
        </div>
        <div className="mb-6 w-1/3">
          <label htmlFor="ReplacementCost" className="block text-lg font-medium text-gray-700 mb-2">
            Replacement Cost
          </label>
          <input
            type="number"
            id="ReplacementCost"
            name="ReplacementCost"
            value={formData.ReplacementCost}
            onChange={handleInputChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-lg"
          />
        </div>
        <div className="mb-6 w-1/3">
          <label htmlFor="AssetType" className="block text-lg font-medium text-gray-700 mb-2">
            Asset Type
          </label>
          <select
            id="AssetType"
            name="AssetType"
            value={formData.AssetType}
            onChange={handleInputChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-lg"
          >
            <option value="">Select Asset Type</option>
            <option value="Server">Server</option>
            <option value="Printer">Printer</option>
            <option value="Switch">Switch</option>
            <option value="Laptop">Laptop</option>
            <option value="Desktop">Desktop</option>
            <option value="Router">Router</option>
          </select>
        </div>
        <div className="mb-6 w-1/3">
          <label htmlFor="PredictionType" className="block text-lg font-medium text-gray-700 mb-2">
            Prediction Type
          </label>
          <select
            id="PredictionType"
            name="PredictionType"
            value={predictionType}
            onChange={handlePredictionTypeChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-lg"
          >
            <option value="">Select Prediction Type</option>
            <option value="maintenance">Maintenance Cost</option>
            <option value="acquisition">Acquisition Cost</option>
            <option value="retirement">Retirement Time</option>
          </select>
        </div>
        <button
          type="submit"
          className="inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Submit
        </button>
      </form>
      {response && (
        <div className="mt-6 w-1/2 p-4 bg-gray-100 rounded-md">
          <h3 className="text-lg font-bold mb-2">Response:</h3>
          <pre>{JSON.stringify(response, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default AssessmentWidget;

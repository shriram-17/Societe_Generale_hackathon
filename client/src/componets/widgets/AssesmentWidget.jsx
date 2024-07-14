import React, { useState } from 'react';

const AssessmentWidget = () => {
  const [formData, setFormData] = useState({
    PurchaseDate: '',
    MaintenanceCostRatio: '',
    ReplacementCost: '',
    AssetType: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData); 
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4">Asset Details</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="PurchaseDate" className="block text-lg font-medium text-gray-700">
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
        <div className="mb-4">
          <label htmlFor="MaintenanceCostRatio" className="block text-lg font-medium text-gray-700">
            Maintenance Cost Ratio
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
        <div className="mb-4">
          <label htmlFor="ReplacementCost" className="block text-lg font-medium text-gray-700">
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
        <div className="mb-4">
          <label htmlFor="AssetType" className="block text-lg font-medium text-gray-700">
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
        <button
          type="submit"
          className="inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default AssessmentWidget;

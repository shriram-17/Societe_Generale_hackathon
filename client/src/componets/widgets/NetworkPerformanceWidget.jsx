import React, { useState } from 'react';
import axios from 'axios';

const AssetManagementWidget = () => {
  const [formData, setFormData] = useState({
    Component_Type: '',
    Manufacturer: '',
    Traffic_Load: '',
    CPU_Usage: '',
    Memory_Usage: '',
    Temperature: '',
    Failure_Duration_Hours: '',
    Maintenance_Activity: '',
    Maintenance_Cost: '',
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

    const data = {
      Component_Type: formData.Component_Type,
      Manufacturer: formData.Manufacturer,
      Traffic_Load: parseFloat(formData.Traffic_Load),
      CPU_Usage: parseFloat(formData.CPU_Usage),
      Memory_Usage: parseFloat(formData.Memory_Usage),
      Temperature: parseFloat(formData.Temperature),
      Failure_Duration_Hours: parseInt(formData.Failure_Duration_Hours),
      Maintenance_Activity: formData.Maintenance_Activity,
      Maintenance_Cost: parseFloat(formData.Maintenance_Cost),
    };

    axios.post('http://localhost:8000/', data)
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-md w-2/3 mx-auto my-4 flex flex-col items-center">
      <h2 className="text-xl font-bold mb-4">Asset Management</h2>
      <form onSubmit={handleSubmit} className="w-full flex flex-col items-center">
      <div className="mb-6 w-1/3">
          <label htmlFor="componentType" className="block text-lg font-medium text-gray-700 mb-2">
            Component Type
          </label>
          <select
            id="componentType"
            name="componentType"
            value={formData.componentType}
            onChange={handleInputChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-lg"
            required
          >
            <option value="">Select Component Type</option>
            <option value="router">Router</option>
            <option value="switch">Switch</option>
            <option value="firewall">Firewall</option>
            <option value="load balancer">Load Balancer</option>
          </select>
        </div>
        <div className="mb-6 w-1/3">
          <label htmlFor="manufacturerType" className="block text-lg font-medium text-gray-700 mb-2">
            Manufacturer Type
          </label>
          <select
            id="manufacturerType"
            name="manufacturerType"
            value={formData.manufacturerType}
            onChange={handleInputChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-lg"
            required
          >
            <option value="">Select Manufacturer Type</option>
            <option value="Cisco">Cisco</option>
            <option value="Juniper">Juniper</option>
            <option value="HP">HP</option>
            <option value="Dell">Dell</option>
          </select>
        </div>
        <div className="mb-6 w-1/3">
          <label htmlFor="Traffic_Load" className="block text-lg font-medium text-gray-700 mb-2">
            Traffic Load
          </label>
          <input
            type="number"
            id="Traffic_Load"
            name="Traffic_Load"
            value={formData.Traffic_Load}
            onChange={handleInputChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-lg"
          />
        </div>

        <div className="mb-6 w-1/3">
          <label htmlFor="CPU_Usage" className="block text-lg font-medium text-gray-700 mb-2">
            CPU Usage
          </label>
          <input
            type="number"
            id="CPU_Usage"
            name="CPU_Usage"
            value={formData.CPU_Usage}
            onChange={handleInputChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-lg"
          />
        </div>
        <div className="mb-6 w-1/3">
          <label htmlFor="Memory_Usage" className="block text-lg font-medium text-gray-700 mb-2">
            Memory Usage
          </label>
          <input
            type="number"
            id="Memory_Usage"
            name="Memory_Usage"
            value={formData.Memory_Usage}
            onChange={handleInputChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-lg"
          />
        </div>

        <div className="mb-6 w-1/3">
          <label htmlFor="Temperature" className="block text-lg font-medium text-gray-700 mb-2">
            Temperature
          </label>
          <input
            type="number"
            id="Temperature"
            name="Temperature"
            value={formData.Temperature}
            onChange={handleInputChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-lg"
          />
        </div>

        <div className="mb-6 w-1/3">
          <label htmlFor="Failure_Duration_Hours" className="block text-lg font-medium text-gray-700 mb-2">
            Failure Duration Hours
          </label>
          <input
            type="number"
            id="Failure_Duration_Hours"
            name="Failure_Duration_Hours"
            value={formData.Failure_Duration_Hours}
            onChange={handleInputChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-lg"
          />
        </div>
        <div className="mb-6 w-1/3">
          <label htmlFor="Maintenance_Activity" className="block text-lg font-medium text-gray-700 mb-2">
            Maintenance Activity
          </label>
          <input
            type="text"
            id="Maintenance_Activity"
            name="Maintenance_Activity"
            value={formData.Maintenance_Activity}
            onChange={handleInputChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-lg"
          />
        </div>
        <div className="mb-6 w-1/3">
          <label htmlFor="Maintenance_Cost" className="block text-lg font-medium text-gray-700 mb-2">
            Maintenance Cost
          </label>
          <input
            type="number"
            id="Maintenance_Cost"
            name="Maintenance_Cost"
            value={formData.Maintenance_Cost}
            onChange={handleInputChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-lg"
          />
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

export default AssetManagementWidget;

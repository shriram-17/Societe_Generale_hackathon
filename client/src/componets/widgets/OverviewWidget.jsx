import React, { useState } from "react";
import LifecycleStatusDistribution from './../graphs/LifecycleStatusDistribution';
import MaintenanceVsReplacementCost from './../graphs/MaintenanceVsReplacementCost';
import TotalCostsByAssetType from './../graphs/TotalCostsByAssetType';
import AgeOfAssets from './../graphs/AgeOfAssets';
import AssetDistributionByType from './../graphs/AssetDistributionByType';

const OverviewWidget = ({ data }) => {
  const [fullScreenGraph, setFullScreenGraph] = useState(null);

  const openFullScreen = (graphName) => {
    setFullScreenGraph(graphName);
  };

  const closeFullScreen = () => {
    setFullScreenGraph(null);
  };

  const getFullScreenComponent = () => {
    switch (fullScreenGraph) {
      case 'lifecycleStatus':
        return <LifecycleStatusDistribution data={data} onClose={closeFullScreen} />;
      case 'maintenanceVsReplacement':
        return <MaintenanceVsReplacementCost data={data} onClose={closeFullScreen} />;
      case 'totalCostsByAssetType':
        return <TotalCostsByAssetType data={data} onClose={closeFullScreen} />;
      case 'ageOfAssets':
        return <AgeOfAssets data={data} onClose={closeFullScreen} />;
      case 'assetDistributionByType':
        return <AssetDistributionByType data={data} onClose={closeFullScreen} />;
      default:
        return null;
    }
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4">Overview</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div
          className="p-4 border cursor-pointer rounded-lg hover:bg-gray-100"
          onClick={() => openFullScreen('lifecycleStatus')}
        >
          <h3 className="text-lg font-bold mb-2">Lifecycle Status Distribution</h3>
        </div>

        <div
          className="p-4 border cursor-pointer rounded-lg hover:bg-gray-100"
          onClick={() => openFullScreen('maintenanceVsReplacement')}
        >
          <h3 className="text-lg font-bold mb-2">Maintenance vs Replacement Cost</h3>
        </div>

        <div
          className="p-4 border cursor-pointer rounded-lg hover:bg-gray-100"
          onClick={() => openFullScreen('totalCostsByAssetType')}
        >
          <h3 className="text-lg font-bold mb-2">Total Costs by Asset Type</h3>
        </div>

        <div
          className="p-4 border cursor-pointer rounded-lg hover:bg-gray-100"
          onClick={() => openFullScreen('ageOfAssets')}
        >
          <h3 className="text-lg font-bold mb-2">Age of Assets</h3>
        </div>

        <div
          className="p-4 border cursor-pointer rounded-lg hover:bg-gray-100"
          onClick={() => openFullScreen('assetDistributionByType')}
        >
          <h3 className="text-lg font-bold mb-2">Asset Distribution by Type</h3>
        </div>
      </div>

      {fullScreenGraph && (
        <div className="fixed top-0 left-0 right-0 bottom-0 bg-gray-900 bg-opacity-75 z-50 flex justify-center items-center">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            {getFullScreenComponent()}
          </div>
        </div>
      )}
    </div>
  );
};

export default OverviewWidget;

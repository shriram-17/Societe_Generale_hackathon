import React from 'react';

const Sidebar = ({ onWidgetSelect }) => {
  const handleLinkClick = (widget) => {
    onWidgetSelect(widget);
  };

  return (
    <div className="bg-gray-800 text-white w-64 space-y-5 py-7 px-2 hidden sm:block">
      <div className="text-2xl font-bold">Dashboard</div>
      <nav className="mt-10">
        <a href="#" onClick={() => handleLinkClick('overview')} className="block py-2.5 px-3 rounded transition duration-200 hover:bg-gray-700 hover:text-white">Overview</a>
        <a href="#" onClick={() => handleLinkClick('assetManagement')} className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700 hover:text-white">Asset Management</a>
        <a href="#" onClick={() => handleLinkClick('networkPerformance')} className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700 hover:text-white">Network Performance</a>
      </nav>
    </div>
  );
};

export default Sidebar;

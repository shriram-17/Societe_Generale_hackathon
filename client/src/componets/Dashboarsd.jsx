import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import axios from "axios";
import Sidebar from './SideBar';
import AssessmentWidget from "./widgets/AssesmentWidget";
import OverviewWidget from './widgets/OverviewWidget';
import NetworkPerformanceWidget from './widgets/NetworkPerformanceWidget';
import ItOperationsWidget from './widgets/ItOperationsWidget';


const Dashboard = () => {
  const [data, setData] = useState([]);
  const [selectedWidget, setSelectedWidget] = useState("overview"); 

  useEffect(() => {
    axios
      .get("http://localhost:8000/asset")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const handleWidgetSelect = (widget) => {
    setSelectedWidget(widget);
  };

  let widgetToRender;
  switch (selectedWidget) {
    case "overview":
      widgetToRender = <OverviewWidget data={data} />;
      break;
    case "assetManagement":
      widgetToRender = <AssessmentWidget />;
      break;
    case "networkPerformance":
      widgetToRender = <NetworkPerformanceWidget />;
      break;
    case "itOperations":
      widgetToRender = <ItOperationsWidget />;
      break;
    default:
      widgetToRender = <OverviewWidget data={data} />;
  }

  return (
    <div className="h-screen flex flex-col">
      <Navbar />
      <div className="flex flex-1">
        <Sidebar onWidgetSelect={handleWidgetSelect} />
        {widgetToRender}
      </div>
    </div>
  );
};

export default Dashboard;

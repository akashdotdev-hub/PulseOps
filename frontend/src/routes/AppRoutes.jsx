import { BrowserRouter, Routes, Route } from "react-router-dom";

import Dashboard from "../pages/Dashboard/Dashboard";
import Login from "../pages/Login/Login";
import Deployments from "../pages/Deployments/Deployments";
import Containers from "../pages/Containers/Containers";
import Monitoring from "../pages/Monitoring/Monitoring";
import AWS from "../pages/AWS/AWS";
import Logs from "../pages/Logs/Logs";
import Settings from "../pages/Settings/Settings";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/deployments" element={<Deployments />} />
        <Route path="/containers" element={<Containers />} />
        <Route path="/monitoring" element={<Monitoring />} />
        <Route path="/aws" element={<AWS />} />
        <Route path="/logs" element={<Logs />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
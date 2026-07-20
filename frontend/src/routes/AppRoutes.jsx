import React, { Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";

// Lazy-loaded components
const Dashboard = React.lazy(() => import("../pages/Dashboard/Dashboard"));
const Login = React.lazy(() => import("../pages/Login/Login"));
const Deployments = React.lazy(() => import("../pages/Deployments/Deployments"));
const Containers = React.lazy(() => import("../pages/Containers/ContainersPage"));
const Monitoring = React.lazy(() => import("../pages/Monitoring/Monitoring"));
const AWS = React.lazy(() => import("../pages/AWS/AWS"));
const Logs = React.lazy(() => import("../pages/Logs/Logs"));
const Settings = React.lazy(() => import("../pages/Settings/Settings"));

// A simple loading fallback
const LoadingFallback = () => <div>Loading...</div>;

function AppRoutes() {
  return (
    <BrowserRouter>
      <Suspense fallback={<LoadingFallback />}>
        <Routes>
          {/* Public Route */}
          <Route path="/login" element={<Login />} />

          {/* Protected Routes using MainLayout */}
          <Route element={<MainLayout />}>
            <Route path="/" element={<Dashboard />} />
            <Route path="/deployments" element={<Deployments />} />
            <Route path="/containers" element={<Containers />} />
            <Route path="/monitoring" element={<Monitoring />} />
            <Route path="/aws" element={<AWS />} />
            <Route path="/logs" element={<Logs />} />
            <Route path="/settings" element={<Settings />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default AppRoutes;
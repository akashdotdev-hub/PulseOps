import { Box, Typography } from "@mui/material";
import { useState } from "react";

import { mockContainers } from "./data/mockContainers";
import ContainerStats from "./components/ContainerStats";
import ContainerToolbar from "./components/ContainerToolbar";
import ContainerTable from "./components/ContainerTable";
import InspectDrawer from "./components/InspectDrawer";



const ContainersPage = () => {

  const handleStart = (id) => {
  console.log("Start:", id);
};

const handleStop = (id) => {
  console.log("Stop:", id);
};

const handleRestart = (id) => {
  console.log("Restart:", id);
};

const handleLogs = (id) => {
  console.log("Logs:", id);
};

const handleInspect = (id) => {
  console.log("Inspect:", id);
};

  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("all");

  const filteredContainers = mockContainers.filter((container) => {
  const matchesSearch =
    container.name.toLowerCase().includes(search.toLowerCase()) ||
    container.image.toLowerCase().includes(search.toLowerCase());

  const matchesStatus =
    status === "all" || container.status === status;

  return matchesSearch && matchesStatus;
});

  return (
    <Box sx={{ p: 3 }}>
      {/* Page Title */}
      <Typography variant="h4" fontWeight={700}>
        Containers
      </Typography>

      <Typography
        variant="body1"
        color="text.secondary"
        sx={{ mb: 4 }}
      >
        Monitor and manage your Docker containers.
      </Typography>

      <ContainerStats containers={mockContainers} />

      <ContainerToolbar
        search={search}
        setSearch={setSearch}
        status={status}
        setStatus={setStatus}
      />

      <ContainerTable
  containers={filteredContainers}
  onStart={handleStart}
  onStop={handleStop}
  onRestart={handleRestart}
  onLogs={handleLogs}
  onInspect={handleInspect}
/>
    </Box>
  );
};

export default ContainersPage;
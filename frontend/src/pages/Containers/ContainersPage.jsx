import { Box, Typography } from "@mui/material";
import { useState } from "react";

import { mockContainers } from "./data/mockContainers";
import ContainerStats from "./components/ContainerStats";
import ContainerToolbar from "./components/ContainerToolbar";
import ContainerTable from "./components/ContainerTable";
import InspectDrawer from "./components/InspectDrawer";



const ContainersPage = () => {

  const [inspectOpen, setInspectOpen] = useState(false);
  const [selectedContainer, setSelectedContainer] = useState(null);

  const handleStart = (container) => {
  console.log("Start:", container.id);
};

const handleStop = (container) => {
  console.log("Stop:", container.id);
};

const handleRestart = (container) => {
  console.log("Restart:", container.id);
};

const handleInspect = (container) => {
  setSelectedContainer(container);
  setInspectOpen(true);
};

const handleLogs = (container) => {
  console.log("Logs:", container.id);
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

      <ContainerStats containers={filteredContainers} />

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

<InspectDrawer
  open={inspectOpen}
  onClose={() => setInspectOpen(false)}
  container={selectedContainer}
/>
    </Box>
  );
};

export default ContainersPage;
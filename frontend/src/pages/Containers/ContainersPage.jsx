import { Box, Typography } from "@mui/material";
import { useState } from "react";
import { useEffect } from "react";

import { mockContainers } from "./data/mockContainers";
import ContainerStats from "./components/ContainerStats";
import ContainerToolbar from "./components/ContainerToolbar";
import ContainerTable from "./components/ContainerTable";
import InspectDrawer from "./components/InspectDrawer";
import LogsDialog from "./components/LogsDialog";
import EmptyState from "../../components/common/EmptyState";
import ContainerSkeleton from "./components/ContainerSkeleton";
import AppSnackbar from "../../components/common/AppSnackbar";

const ContainersPage = () => {
  const [inspectOpen, setInspectOpen] = useState(false);
  const [logsOpen, setLogsOpen] = useState(false);

  // Only ONE selectedContainer state
  const [selectedContainer, setSelectedContainer] = useState(null);

  const handleStart = (container) => {
  setSnackbar({
    open: true,
    message: `${container.name} started successfully`,
    severity: "success",
  });
};

  const handleStop = (container) => {
  setSnackbar({
    open: true,
    message: `${container.name} stopped successfully`,
    severity: "success",
  });
};

  const handleRestart = (container) => {
  setSnackbar({
    open: true,
    message: `${container.name} restarted successfully`,
    severity: "success",
  });
};

  const handleInspect = (container) => {
    setSelectedContainer(container);
    setInspectOpen(true);
  };

  const handleLogs = (container) => {
    setSelectedContainer(container);
    setLogsOpen(true);
  };

  const [loading, setLoading] = useState(true);

  const [snackbar, setSnackbar] = useState({
  open: false,
  message: "",
  severity: "success",
});

  useEffect(() => {
  const timer = setTimeout(() => {
    setLoading(false);
  }, 2000);

  return () => clearTimeout(timer);
}, []);

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
{loading ? (
  <ContainerSkeleton />
) : filteredContainers.length === 0 ? (
  <EmptyState
    title="No Containers Found"
    description="Try adjusting your search or filter."
  />
) : (
  <ContainerTable
    containers={filteredContainers}
    onStart={handleStart}
    onStop={handleStop}
    onRestart={handleRestart}
    onLogs={handleLogs}
    onInspect={handleInspect}
  />
)}

      <InspectDrawer
        open={inspectOpen}
        onClose={() => setInspectOpen(false)}
        container={selectedContainer}
      />

      <LogsDialog
        open={logsOpen}
        onClose={() => setLogsOpen(false)}
        container={selectedContainer}
      />

      <AppSnackbar
  open={snackbar.open}
  message={snackbar.message}
  severity={snackbar.severity}
  onClose={() =>
    setSnackbar((prev) => ({
      ...prev,
      open: false,
    }))
  }
/>
    </Box>
  );
};

export default ContainersPage;
import { Box, Typography } from "@mui/material";
import { mockContainers } from "./data/mockContainers";

const ContainersPage = () => {
  return (
    <Box sx={{ p: 3 }}>
      {/* Page Title */}
      <Typography variant="h4" fontWeight={700}>
        Containers
      </Typography>

      <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
        Monitor and manage your Docker containers.
      </Typography>

      {/* Temporary Section */}
      <Typography variant="h6">
        Total Containers: {mockContainers.length}
      </Typography>
    </Box>
  );
};

export default ContainersPage;
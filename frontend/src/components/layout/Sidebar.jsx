import { Box, Typography } from "@mui/material";

function Sidebar() {
  return (
    <Box
      sx={{
        width: 250,
        backgroundColor: "background.paper",
        borderRight: "1px solid #334155",
        p: 3,
      }}
    >
      <Typography variant="h5" fontWeight="bold">
        PulseOps
      </Typography>
    </Box>
  );
}

export default Sidebar;
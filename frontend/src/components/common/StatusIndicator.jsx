import { Box, Typography } from "@mui/material";

const statusColors = {
  healthy: "#c9ef31",
  running: "#c9ef31",
  connected: "#c9ef31",
  active: "#c9ef31",

  warning: "#ffd54f",

  offline: "#ff5252",
  stopped: "#ff5252",
  failed: "#ff5252",
};

function StatusIndicator({ status }) {
  const color =
    statusColors[status.toLowerCase()] || "#8a8c82";

  const shouldPulse = [
    "healthy",
    "running",
    "connected",
    "active",
  ].includes(status.toLowerCase());

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: 1,
      }}
    >
      <Box
        sx={{
          width: 10,
          height: 10,
          borderRadius: "50%",
          bgcolor: color,

          animation: shouldPulse
            ? "pulse 2s infinite ease-in-out"
            : "none",

          "@keyframes pulse": {
            "0%": {
              transform: "scale(1)",
              boxShadow: `0 0 4px ${color}`,
            },
            "50%": {
              transform: "scale(1.25)",
              boxShadow: `0 0 14px ${color}`,
            },
            "100%": {
              transform: "scale(1)",
              boxShadow: `0 0 4px ${color}`,
            },
          },
        }}
      />

      <Typography
        variant="body2"
        sx={{
          color: "text.secondary",
          fontWeight: 500,
        }}
      >
        {status}
      </Typography>
    </Box>
  );
}

export default StatusIndicator;
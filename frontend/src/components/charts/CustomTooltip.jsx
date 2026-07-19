import { Paper, Typography, Stack } from "@mui/material";

function CustomTooltip({ active, payload, label }) {
  if (!active || !payload || !payload.length) return null;

  return (
    <Paper
      elevation={6}
      sx={{
        bgcolor: "background.paper",
        border: "1px solid",
        borderColor: "primary.main",
        borderRadius: 3,
        p: 2,
        minWidth: 150,
      }}
    >
      <Typography
        variant="subtitle2"
        sx={{
          color: "primary.main",
          mb: 1,
          fontWeight: 700,
        }}
      >
        {label}
      </Typography>

      <Stack spacing={1}>
        <Typography sx={{ color: "#ccff00" }}>
          CPU : {payload[0].value}%
        </Typography>

        <Typography sx={{ color: "#39d353" }}>
          RAM : {payload[1].value}%
        </Typography>
      </Stack>
    </Paper>
  );
}

export default CustomTooltip;
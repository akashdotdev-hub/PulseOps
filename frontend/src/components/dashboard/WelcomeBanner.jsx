import { Paper, Typography, Stack } from "@mui/material";

function WelcomeBanner() {
  const hour = new Date().getHours();

  let greeting = "Good Evening";

  if (hour < 12) greeting = "Good Morning";
  else if (hour < 18) greeting = "Good Afternoon";

  return (
    <Paper
      sx={{
        bgcolor: "background.paper",
        border: "1px solid",
        borderColor: "divider",
        borderRadius: 4,
        p: 3,
        mb: 3,
      }}
    >
      <Stack spacing={1}>
        <Typography
          variant="h4"
          fontWeight={700}
        >
          {greeting} 👋
        </Typography>

        <Typography color="text.secondary">
          Everything is operating normally.
        </Typography>

        <Typography
          sx={{
            color: "primary.main",
            fontWeight: 600,
          }}
        >
          4 Containers • 12 Deployments • No Active Alerts
        </Typography>
      </Stack>
    </Paper>
  );
}

export default WelcomeBanner;
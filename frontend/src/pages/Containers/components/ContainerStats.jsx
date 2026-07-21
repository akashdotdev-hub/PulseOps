import { Grid, Paper, Typography } from "@mui/material";

const ContainerStats = ({ containers }) => {
  const total = containers.length;
  const running = containers.filter(c => c.status === "running").length;
  const stopped = containers.filter(c => c.status === "stopped").length;
  const images = new Set(containers.map(c => c.image)).size;

  const stats = [
    { title: "Total Containers", value: total },
    { title: "Running", value: running },
    { title: "Stopped", value: stopped },
    { title: "Images", value: images },
  ];

  return (
    <Grid container spacing={3} sx={{ mb: 4 }}>
      {stats.map((stat) => (
        <Grid key={stat.title} size={{ xs: 12, sm: 6, md: 3 }}>
          <Paper sx={{ p: 3 }}>
            <Typography color="text.secondary" variant="body2">
              {stat.title}
            </Typography>

            <Typography variant="h4" fontWeight={700} sx={{ mt: 1 }}>
              {stat.value}
            </Typography>
          </Paper>
        </Grid>
      ))}
    </Grid>
  );
};

export default ContainerStats;
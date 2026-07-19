import { Grid } from "@mui/material";

import MainLayout from "../../layouts/MainLayout";
import StatCard from "../../components/cards/StatCard";

function Dashboard() {
  return (
    <MainLayout>
      <Grid container spacing={3}>
        <Grid size={{ xs: 12, md: 4 }}>
          <StatCard title="CPU Usage" value="34%" />
        </Grid>

        <Grid size={{ xs: 12, md: 4 }}>
          <StatCard title="RAM Usage" value="58%" />
        </Grid>

        <Grid size={{ xs: 12, md: 4 }}>
          <StatCard title="Disk Usage" value="71%" />
        </Grid>

        <Grid size={{ xs: 12, md: 4 }}>
          <StatCard title="Containers" value="4" />
        </Grid>

        <Grid size={{ xs: 12, md: 4 }}>
          <StatCard title="Deployments" value="12" />
        </Grid>

        <Grid size={{ xs: 12, md: 4 }}>
          <StatCard title="EC2 Status" value="Running" />
        </Grid>
      </Grid>
    </MainLayout>
  );
}

export default Dashboard;
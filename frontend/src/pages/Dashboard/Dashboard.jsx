import { Grid } from "@mui/material";

import MainLayout from "../../layouts/MainLayout";

import StatCard from "../../components/cards/StatCard";
import SectionCard from "../../components/common/SectionCard";
import PerformanceChart from "../../components/charts/PerformanceChart";

function Dashboard() {
  return (
    <MainLayout>
      <Grid container spacing={3}>

        {/* Top Statistics */}

        <Grid size={{ xs: 12, sm: 6, lg: 3 }}>
          <StatCard title="CPU Usage" value="34%" />
        </Grid>

        <Grid size={{ xs: 12, sm: 6, lg: 3 }}>
          <StatCard title="Memory" value="68%" />
        </Grid>

        <Grid size={{ xs: 12, sm: 6, lg: 3 }}>
          <StatCard title="Containers" value="4 Running" />
        </Grid>

        <Grid size={{ xs: 12, sm: 6, lg: 3 }}>
          <StatCard title="Deployments" value="12 Today" />
        </Grid>

        {/* Performance Chart */}

        <Grid size={{ xs: 12, lg: 8 }}>
          <SectionCard title="Performance Overview">
            <PerformanceChart />
          </SectionCard>
        </Grid>

        {/* Placeholder */}

        <Grid size={{ xs: 12, lg: 4 }}>
          <SectionCard title="System Health">
            Coming Soon...
          </SectionCard>
        </Grid>

      </Grid>
    </MainLayout>
  );
}

export default Dashboard;
import { Grid } from "@mui/material";

import StatCard from "../../components/cards/StatCard";
import SectionCard from "../../components/common/SectionCard";
import PerformanceChart from "../../components/charts/PerformanceChart";
import SystemHealth from "../../components/dashboard/SystemHealth";
import RecentDeployments from "../../components/dashboard/RecentDeployments";
import RecentActivity from "../../components/dashboard/RecentActivity";
import MemoryIcon from "@mui/icons-material/Memory";
import StorageIcon from "@mui/icons-material/Storage";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import DnsIcon from "@mui/icons-material/Dns";
import WelcomeBanner from "../../components/dashboard/WelcomeBanner";


function Dashboard() {
  return (
    <>
      <WelcomeBanner />
      <Grid container spacing={3}>

        {/* Top Statistics */}
<Grid size={{ xs: 12, sm: 6, lg: 3 }}>
    <StatCard
        title="CPU Usage"
        value="34%"
        subtitle="+2% Last Hour"
        icon={<MemoryIcon fontSize="large" />}
    />
</Grid>

<Grid size={{ xs: 12, sm: 6, lg: 3 }}>
    <StatCard
        title="Memory"
        value="68%"
        subtitle="8 GB / 16 GB"
        icon={<StorageIcon fontSize="large" />}
    />
</Grid>

<Grid size={{ xs: 12, sm: 6, lg: 3 }}>
    <StatCard
        title="Containers"
        value="4"
        subtitle="All Running"
        icon={<DnsIcon fontSize="large" />}
    />
</Grid>

<Grid size={{ xs: 12, sm: 6, lg: 3 }}>
    <StatCard
        title="Deployments"
        value="12"
        subtitle="Today"
        icon={<RocketLaunchIcon fontSize="large" />}
    />
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
  <SystemHealth />
</SectionCard>
        </Grid>

      <Grid size={{ xs: 12, md: 6 }}>
  <SectionCard title="Recent Deployments">
    <RecentDeployments />
  </SectionCard>
</Grid>

<Grid size={{ xs: 12, md: 6 }}>
  <SectionCard title="Recent Activity">
    <RecentActivity />
  </SectionCard>
</Grid>

      </Grid>
    </>
  );
}

export default Dashboard;
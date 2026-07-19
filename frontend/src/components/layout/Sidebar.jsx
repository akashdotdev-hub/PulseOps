import {
  Box,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";

import DashboardIcon from "@mui/icons-material/Dashboard";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import Inventory2Icon from "@mui/icons-material/Inventory2";
import MonitorHeartIcon from "@mui/icons-material/MonitorHeart";
import CloudIcon from "@mui/icons-material/Cloud";
import DescriptionIcon from "@mui/icons-material/Description";
import SettingsIcon from "@mui/icons-material/Settings";

import { Link, useLocation } from "react-router-dom";

const menuItems = [
  {
    text: "Dashboard",
    icon: <DashboardIcon />,
    path: "/",
  },
  {
    text: "Deployments",
    icon: <RocketLaunchIcon />,
    path: "/deployments",
  },
  {
    text: "Containers",
    icon: <Inventory2Icon />,
    path: "/containers",
  },
  {
    text: "Monitoring",
    icon: <MonitorHeartIcon />,
    path: "/monitoring",
  },
  {
    text: "AWS",
    icon: <CloudIcon />,
    path: "/aws",
  },
  {
    text: "Logs",
    icon: <DescriptionIcon />,
    path: "/logs",
  },
  {
    text: "Settings",
    icon: <SettingsIcon />,
    path: "/settings",
  },
];

function Sidebar() {
  const location = useLocation();

  return (
    <Box
      sx={{
        width: 250,
        bgcolor: "background.paper",
        borderRight: "1px solid",
        borderColor: "divider",
      }}
    >
      <Typography
        variant="h5"
        sx={{
          p: 3,
          fontWeight: "bold",
        }}
      >
        PulseOps
      </Typography>

      <List>
        {menuItems.map((item) => (
          <ListItemButton
            key={item.text}
            component={Link}
            to={item.path}
            selected={location.pathname === item.path}
          >
            <ListItemIcon>{item.icon}</ListItemIcon>

            <ListItemText primary={item.text} />
          </ListItemButton>
        ))}
      </List>
    </Box>
  );
}

export default Sidebar;
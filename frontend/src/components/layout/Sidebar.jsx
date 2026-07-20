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
        width: 280,
        minWidth: 280,
        height: "100vh",
        position: "sticky",
        top: 0,

        bgcolor: "background.paper",

        borderTopRightRadius: 32,
        borderBottomRightRadius: 32,

        borderRight: "1px solid",
        borderColor: "divider",

        overflowY: "auto",
        overflowX: "hidden",
      }}
    >
      <Typography
        variant="h4"
        sx={{
          p: 3,
          fontWeight: 700,
          color: "primary.main",
          letterSpacing: 0.5,
        }}
      >
        PulseOps
      </Typography>

      <List sx={{ px: 1 }}>
        {menuItems.map((item) => {
          const isSelected = location.pathname === item.path;

          return (
            <ListItemButton
              key={item.text}
              component={Link}
              to={item.path}
              selected={isSelected}
              sx={{
                my: 0.5,
                mx: 1,
                py: 1.3,
                px: 2,
                borderRadius: 3,

                color: "text.primary",

                transition: "all .25s ease",

                "&:hover": {
                  bgcolor: "rgba(204,255,0,.08)",

                  "& .MuiListItemIcon-root": {
                    color: "primary.main",
                    transform: "scale(1.08)",
                  },
                },

                "&.Mui-selected": {
                  bgcolor: "rgba(204,255,0,.12)",

                  borderLeft: "3px solid",
                  borderColor: "primary.main",

                  "& .MuiListItemIcon-root": {
                    color: "primary.main",
                  },

                  "& .MuiListItemText-primary": {
                    color: "primary.main",
                    fontWeight: 700,
                  },

                  "&:hover": {
                    bgcolor: "rgba(204,255,0,.16)",
                  },
                },
              }}
            >
              <ListItemIcon
                sx={{
                  color: isSelected ? "primary.main" : "text.secondary",
                  minWidth: 40,
                  transition: "all .25s ease",
                }}
              >
                {item.icon}
              </ListItemIcon>

             <ListItemText
  primary={
    <Typography fontWeight={isSelected ? 700 : 500}>
      {item.text}
    </Typography>
  }
/>
            </ListItemButton>
          );
        })}
      </List>
    </Box>
  );
}

export default Sidebar;
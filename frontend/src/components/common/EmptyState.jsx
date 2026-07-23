import { Box, Typography } from "@mui/material";
import Inventory2OutlinedIcon from "@mui/icons-material/Inventory2Outlined";

const EmptyState = ({
  title = "No Data Found",
  description = "There is nothing to display.",
  icon = <Inventory2OutlinedIcon sx={{ fontSize: 80 }} />,
}) => {
  return (
    <Box
      sx={{
        py: 8,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
      }}
    >
      <Box sx={{ color: "text.secondary", mb: 2 }}>
        {icon}
      </Box>

      <Typography variant="h5" fontWeight={600}>
        {title}
      </Typography>

      <Typography
        variant="body1"
        color="text.secondary"
        sx={{ mt: 1 }}
      >
        {description}
      </Typography>
    </Box>
  );
};

export default EmptyState;
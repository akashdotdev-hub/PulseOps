import {
  Stack,
  Typography,
  Divider,
  Box,
} from "@mui/material";

const activities = [
  "Docker container restarted",
  "CPU usage reached 52%",
  "Terraform apply completed",
  "EC2 health check passed",
];

function RecentActivity() {
  return (
    <Stack spacing={2}>
      {activities.map((activity, index) => (
        <Box key={activity}>
          <Typography>
            {activity}
          </Typography>

          {index !== activities.length - 1 && (
            <Divider sx={{ mt: 2 }} />
          )}
        </Box>
      ))}
    </Stack>
  );
}

export default RecentActivity;
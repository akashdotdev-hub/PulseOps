import {
  Stack,
  Typography,
  Divider,
  Box,
} from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const deployments = [
  {
    name: "Production Deployment",
    time: "2 mins ago",
  },
  {
    name: "Docker Image Built",
    time: "15 mins ago",
  },
  {
    name: "GitHub Actions Passed",
    time: "28 mins ago",
  },
];

function RecentDeployments() {
  return (
    <Stack spacing={2}>
      {deployments.map((deployment, index) => (
        <Box key={deployment.name}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 2,
            }}
          >
            <CheckCircleIcon
              sx={{
                color: "secondary.main",
              }}
            />

            <Box>
              <Typography fontWeight={600}>
                {deployment.name}
              </Typography>

              <Typography
                variant="body2"
                color="text.secondary"
              >
                {deployment.time}
              </Typography>
            </Box>
          </Box>

          {index !== deployments.length - 1 && (
            <Divider sx={{ mt: 2 }} />
          )}
        </Box>
      ))}
    </Stack>
  );
}

export default RecentDeployments;
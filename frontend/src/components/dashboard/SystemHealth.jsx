import { Stack, Typography, Box, Divider } from "@mui/material";
import StatusIndicator from "../common/StatusIndicator";

const services = [
  { name: "Docker Engine", status: "Running" },
  { name: "AWS EC2", status: "Healthy" },
  { name: "MySQL Database", status: "Connected" },
  { name: "GitHub Actions", status: "Active" },
];

function SystemHealth() {
  return (
    <Stack spacing={2}>
      {services.map((service, index) => (
        <Box key={service.name}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              py: 0.5,
            }}
          >
            <Typography
              variant="body1"
              sx={{
                fontWeight: 500,
                color: "text.primary",
              }}
            >
              {service.name}
            </Typography>

            <StatusIndicator status={service.status} />
          </Box>

          {index !== services.length - 1 && (
            <Divider
              sx={{
                mt: 1,
                borderColor: "divider",
              }}
            />
          )}
        </Box>
      ))}
    </Stack>
  );
}

export default SystemHealth;
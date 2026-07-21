import {
  Drawer,
  Box,
  Typography,
  Divider,
  Stack,
  Button,
} from "@mui/material";

const DetailRow = ({ label, value }) => (
  <Stack
    direction="row"
    justifyContent="space-between"
    sx={{ py: 1 }}
  >
    <Typography fontWeight={600}>
      {label}
    </Typography>

    <Typography color="text.secondary">
      {value}
    </Typography>
  </Stack>
);

const InspectDrawer = ({
  open,
  onClose,
  container,
}) => {

  if (!container) return null;

  return (
    <Drawer
      anchor="right"
      open={open}
      onClose={onClose}
    >
      <Box
        sx={{
          width: 380,
          p: 3,
        }}
      >

        <Typography
          variant="h5"
          fontWeight={700}
        >
          Container Details
        </Typography>

        <Typography
          color="text.secondary"
          sx={{ mb: 3 }}
        >
          Docker Container Information
        </Typography>

        <Divider sx={{ mb: 2 }} />

        <DetailRow
          label="Name"
          value={container}
        />

        <DetailRow
          label="Image"
          value={container.image}
        />

        <DetailRow
          label="Status"
          value={container.status}
        />

        <DetailRow
          label="Ports"
          value={container.ports}
        />

        <DetailRow
          label="CPU"
          value={container.cpu}
        />

        <DetailRow
          label="Memory"
          value={container.memory}
        />

        <DetailRow
          label="Uptime"
          value={container.uptime}
        />

        {/* Fake values for now */}

        <DetailRow
          label="Network"
          value="bridge"
        />

        <DetailRow
          label="Restart Policy"
          value="always"
        />

        <DetailRow
          label="Container ID"
          value={container.id}
        />

        <Button
          variant="contained"
          fullWidth
          sx={{ mt: 4 }}
          onClick={onClose}
        >
          Close
        </Button>

      </Box>
    </Drawer>
  );
};

export default InspectDrawer;
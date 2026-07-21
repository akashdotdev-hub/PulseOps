import {
  Box,
  TextField,
  MenuItem,
  Button,
} from "@mui/material";

import RefreshIcon from "@mui/icons-material/Refresh";
import AddIcon from "@mui/icons-material/Add";

const ContainerToolbar = ({
  search,
  setSearch,
  status,
  setStatus,
}) => {
  return (
    <Box
      sx={{
        display: "flex",
        gap: 2,
        mb: 4,
        flexWrap: "wrap",
        alignItems: "center",
      }}
    >
      <TextField
        label="Search Containers"
        size="small"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        sx={{ minWidth: 260 }}
      />

      <TextField
        select
        label="Status"
        size="small"
        value={status}
        onChange={(e) => setStatus(e.target.value)}
        sx={{ width: 160 }}
      >
        <MenuItem value="all">All</MenuItem>
        <MenuItem value="running">Running</MenuItem>
        <MenuItem value="stopped">Stopped</MenuItem>
      </TextField>

      <Button
        variant="outlined"
        startIcon={<RefreshIcon />}
      >
        Refresh
      </Button>

      <Button
        variant="contained"
        startIcon={<AddIcon />}
        disabled
      >
        Create Container
      </Button>
    </Box>
  );
};

export default ContainerToolbar;
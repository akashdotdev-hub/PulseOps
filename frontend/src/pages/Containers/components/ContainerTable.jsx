import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Chip,
  IconButton,
  Stack,
} from "@mui/material";

import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import StopIcon from "@mui/icons-material/Stop";
import RestartAltIcon from "@mui/icons-material/RestartAlt";
import DescriptionIcon from "@mui/icons-material/Description";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";

const ContainerTable = ({
  containers,
  onStart,
  onStop,
  onRestart,
  onLogs,
  onInspect,
}) => {
  return (
    <TableContainer component={Paper}>
      <Table>

        <TableHead>
          <TableRow>
            <TableCell>Status</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Image</TableCell>
            <TableCell>Ports</TableCell>
            <TableCell>CPU</TableCell>
            <TableCell>Memory</TableCell>
            <TableCell>Uptime</TableCell>
            <TableCell align="center">Actions</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>

          {containers.map((container) => (

            <TableRow key={container.id} hover>

              <TableCell>

                <Chip
                  label={container.status}
                  color={
                    container.status === "running"
                      ? "success"
                      : "error"
                  }
                  size="small"
                />

              </TableCell>

              <TableCell>{container.name}</TableCell>

              <TableCell>{container.image}</TableCell>

              <TableCell>{container.ports}</TableCell>

              <TableCell>{container.cpu}</TableCell>

              <TableCell>{container.memory}</TableCell>

              <TableCell>{container.uptime}</TableCell>

              <TableCell>

                <Stack
                  direction="row"
                  spacing={1}
                  justifyContent="center"
                >
                  <IconButton
                   color="success"
                   onClick={() => onStart(container)}
>
                  <PlayArrowIcon />
                 </IconButton>
<IconButton
  color="error"
  onClick={() => onStop(container)}
>
  <StopIcon />
</IconButton>
                  <IconButton
  color="primary"
  onClick={() => onRestart(container)}
>
  <RestartAltIcon />
</IconButton>

                 <IconButton
  color="info"
  onClick={() => onLogs(container)}
>
  <DescriptionIcon />
</IconButton>

                <IconButton
  color="secondary"
  onClick={() => onInspect(container)}
>
  <InfoOutlinedIcon />
</IconButton>

                </Stack>

              </TableCell>

            </TableRow>

          ))}

        </TableBody>

      </Table>
    </TableContainer>
  );
};

export default ContainerTable;
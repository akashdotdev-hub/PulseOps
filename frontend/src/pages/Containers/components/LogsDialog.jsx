import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Typography,
  Box,
} from "@mui/material";

import { mockLogs } from "../data/mockLogs";

const LogsDialog = ({ open, onClose, container }) => {
  if (!container) return null;

  return (
    <Dialog
      open={open}
      onClose={onClose}
      fullWidth
      maxWidth="md"
    >
      <DialogTitle>
        Logs - {container.name}
      </DialogTitle>

      <DialogContent dividers>
        <Box
          sx={{
            bgcolor: "#111",
            color: "#00ff66",
            p: 2,
            borderRadius: 1,
            maxHeight: 400,
            overflowY: "auto",
            fontFamily: "monospace",
          }}
        >
          {mockLogs.map((log, index) => (
            <Typography
              key={index}
              sx={{
                fontFamily: "monospace",
                mb: 0.5,
              }}
            >
              {log}
            </Typography>
          ))}
        </Box>
      </DialogContent>

      <DialogActions>
        <Button
          variant="contained"
          onClick={onClose}
        >
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default LogsDialog;
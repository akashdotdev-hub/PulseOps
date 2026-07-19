import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "dark",

    primary: {
      main: "#06a719",
    },

    secondary: {
      main: "#6cf068",
    },

    background: {
      default: "#001800",
      paper: "#053104",
    },

    success: {
      main: "#6cf068",
    },

    warning: {
      main: "#fdff01",
    },

    error: {
      main: "#ff4d4d",
    },

    text: {
      primary: "#F5F5F5",
      secondary: "#B8D8B8",
    },

    divider: "#1d3b1d",
  },

  shape: {
    borderRadius: 12,
  },

  typography: {
    fontFamily: "'Inter', 'Roboto', sans-serif",

    h4: {
      fontWeight: 700,
    },

    h5: {
      fontWeight: 700,
    },

    h6: {
      fontWeight: 600,
    },
  },
});

export default theme;
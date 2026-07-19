import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "dark",

    // Primary Accent: High-contrast, vibrant lime-neon (#c8f542)
    primary: {
      main: "#c8f542",
      contrastText: "#050508", // Black text for absolute legibility on bright neon
    },

    // Secondary Accent: Fresh, glowing mint-turquoise (#42f5c8)
    secondary: {
      main: "#42f5c8",
      contrastText: "#050508",
    },

    // Background Canvas Configurations
    background: {
      default: "#050508", // Deep, sleek dark-mode canvas (--black)
      paper: "#1a1a26",   // Muted dark-blue/grey card backing (--mid)
    },

    // Typography Colors
    text: {
      primary: "#f5f4f0",   // Warm, premium off-white (--white)
      secondary: "#6b6b80", // Clean, lower-contrast text color (--muted)
    },

    // Crisp grid and divider lines
    divider: "rgba(255, 255, 255, 0.08)",

    // UI Feedback Modifiers
    success: {
      main: "#42f5c8", // Reusing your secondary mint-turquoise for successful states
    },
    warning: {
      main: "#ffd54f",
    },
    error: {
      main: "#ff5252",
    },
  },

  shape: {
    borderRadius: 14,
  },

  typography: {
    // Injecting DM Sans as primary body and Syne as header overrides
    fontFamily: "'DM Sans', 'Syne', sans-serif",
    h1: { fontFamily: "'Syne', sans-serif", fontWeight: 800 },
    h2: { fontFamily: "'Syne', sans-serif", fontWeight: 800 },
    h3: { fontFamily: "'Syne', sans-serif", fontWeight: 700 },
    h4: { fontFamily: "'Syne', sans-serif", fontWeight: 700 },
    h5: { fontFamily: "'Syne', sans-serif", fontWeight: 600 },
    h6: { fontFamily: "'Syne', sans-serif", fontWeight: 600 },
    button: {
      fontFamily: "'Syne', sans-serif",
      fontWeight: 700,
      letterSpacing: "0.06em",
      textTransform: "uppercase",
    },
  },
});

export default theme;
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: "#0b0b0b",
      paper: "#111213",
    },
    text: {
      primary: "#ffffff",
      secondary: "rgba(255,255,255,.72)",
    },
    primary: {
      main: "#8a86e8",
    },
    divider: "rgba(255,255,255,.12)",
  },
  shape: { borderRadius: 12 },
  spacing: 8,
  typography: {
    fontFamily: `'Inter', system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif`,
    h1: { fontFamily: `'Playfair Display', serif` },
    h2: { fontFamily: `'Playfair Display', serif` },
    h3: { fontFamily: `'Playfair Display', serif` },
    button: { textTransform: "none", fontWeight: 600 },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: "#0b0b0b",
          color: "#fff",
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: { backgroundImage: "none" },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 999,
        },
      },
    },
    MuiFab: {
      styleOverrides: {
        root: {
          boxShadow: "0 14px 40px rgba(0,0,0,.35)",
        },
      },
    },
  },
});

export default theme;

import { createTheme } from "@mui/material/styles";

const Theme = createTheme({
  palette: {
    primary: {
      main: "#5C5470",
      light: "#FAF0E6",
    },
    secondary: {
      main: "#352F44",
      light: "#FFFFFF",
      black: "#000000",
    },
    black: {
      main: "#000000",
    },
  },
  components: {
    MuiListItem: {
      styleOverrides: {
        root: {
          maxWidth: "max-content",
        },
      },
    },

    MuiButtonBase: {
      styleOverrides: {
        root: ({ ownerState }) => ({
          color: ownerState.variant === "custom" ? "red" : "green",
        }),
      },
    },
  },
  typography: {
    fontSize: 16,
    h1: {
      fontSize: "2.5rem",
      fontFamily: "'Poppins', sans-serif",
      color: "#352F44",
      fontWeight: 600,
    },
    h2: {
      fontSize: "2rem",
      fontFamily: "'Poppins', sans-serif",
      color: "#352F44",
      fontWeight: 500,
    },
    h3: {
      fontSize: "1.75rem",
      fontFamily: "'Poppins', sans-serif",
      color: "#352F44",
      fontWeight: 500,
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
});

export default Theme;

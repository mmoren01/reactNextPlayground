import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#FF0080', // Electric Pink
      light: '#FF3399',
      dark: '#CC0066',
    },
    secondary: {
      main: '#00F0FF', // Cyber Cyan
      light: '#33F3FF',
      dark: '#00C0CC',
    },
    background: {
      default: '#0A0E27', // Deep Navy
      paper: '#1A1F3A', // Soft Dark
    },
    text: {
      primary: '#FFFFFF',
      secondary: '#B4B4C5',
    },
    error: {
      main: '#FF6B35', // Sunset Orange
    },
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontSize: '4rem',
      fontWeight: 800,
      lineHeight: 1.2,
      letterSpacing: '-0.02em',
    },
    h2: {
      fontSize: '3rem',
      fontWeight: 700,
      lineHeight: 1.3,
    },
    h3: {
      fontSize: '2rem',
      fontWeight: 600,
    },
    body1: {
      fontSize: '1.125rem',
      lineHeight: 1.7,
    },
  },
  shape: {
    borderRadius: 16,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          fontWeight: 600,
          fontSize: '1rem',
          padding: '12px 32px',
          borderRadius: '12px',
        },
      },
    },
  },
});
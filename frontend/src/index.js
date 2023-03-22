import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom';
import {createTheme, ThemeProvider} from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#3f51b5',
    },
    secondary: {
      main: '#3f51b5',
      contrastText: '#3f51b5',
    },
  },
  typography: {
    fontFamily: 'Inter, Roboto, "Helvetica Neue", "Arial Nova", "Nimbus Sans", Arial, sans-serif',
    h1: {
      fontFamily: 'Charter, "Bitstream Charter", "Sitka Text", Cambria, serif',
      fontSize: '3.7rem',
    },
    h2: {
      fontSize: '2.1rem',
      marginBottom: '.7em',
    },
    h3: {
      fontSize: '1.6rem',
    },
    h4: {
      fontSize: '1.3rem',
      color: 'rgb(106, 77, 123)',
    },
  },
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>,
);

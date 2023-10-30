import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from '@emotion/react';

import { theme } from 'theme';
import App from './App.jsx';
import './index.css';
import GlobalStateProvider from 'GlobalStateProvider';

ReactDOM.createRoot(document.getElementById('root')).render(
  <ThemeProvider theme={theme}>
    <GlobalStateProvider>
      <App />
    </GlobalStateProvider>
  </ThemeProvider>
);

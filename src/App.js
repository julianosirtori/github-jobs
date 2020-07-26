import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import { ThemeProvider } from 'styled-components';
import Routes from './routes';
import theme from './providers/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </ThemeProvider>

  );
}

export default App;

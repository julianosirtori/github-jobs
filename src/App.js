import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import { ThemeProvider } from 'styled-components';
import Routes from './routes';
import GlobalStyles from './global/styles';
import theme from './providers/theme';

import Flex from './components/atoms/Flex';
import Text from './components/atoms/Text';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Flex minHeight="100%" bg="#F6F7FB">
        <Flex flexDirection="column" marginY="32px" marginX="auto" maxWidth={1200} width="100%" minHeight="100%">
          <Flex marginBottom="32px">
            <Text fontSize="xlarge" marginRight="4px" fontWeight="bold">Github</Text>
            <Text fontSize="xlarge">Jobs</Text>
          </Flex>
          <BrowserRouter>
            <Routes />
          </BrowserRouter>
        </Flex>

      </Flex>

    </ThemeProvider>

  );
}

export default App;

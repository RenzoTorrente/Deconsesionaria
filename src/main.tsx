import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { ChakraProvider } from '@chakra-ui/react';
import chakratheme from './theme/ChakraTheme';
import { QueryClient, QueryClientProvider } from "react-query";
const queryClient = new QueryClient();
ReactDOM.render(
 
  <ChakraProvider theme={chakratheme}>
     <QueryClientProvider client={queryClient}>
    <App />
    </QueryClientProvider>
  </ChakraProvider>,
  document.getElementById('root')
)

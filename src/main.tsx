import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import AppRoutes from './routes/AppRoutes.tsx';
import { ChakraProvider } from '@chakra-ui/react';
import 'react-tooltip/dist/react-tooltip.css';
import { Tooltip } from 'react-tooltip';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider>
      <AppRoutes />
      <Tooltip id="my-tooltip" />
    </ChakraProvider>
  </React.StrictMode>
);

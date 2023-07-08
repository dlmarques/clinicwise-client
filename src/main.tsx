import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import AppRoutes from './routes/AppRoutes.tsx';
import { ChakraProvider } from '@chakra-ui/react';
import 'react-tooltip/dist/react-tooltip.css';
import { Tooltip } from 'react-tooltip';
import { Provider } from 'react-redux';
import store from './store/index.ts';
import './i18n';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <ChakraProvider>
        <AppRoutes />
        <Tooltip id="my-tooltip" />
      </ChakraProvider>
    </Provider>
  </React.StrictMode>
);

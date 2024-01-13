import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import AppRoutes from './routes/AppRoutes.tsx';
import { ChakraProvider } from '@chakra-ui/react';
import { Auth0Provider, Auth0ProviderOptions } from '@auth0/auth0-react';
import 'react-tooltip/dist/react-tooltip.css';
import { Tooltip } from 'react-tooltip';
import { Provider } from 'react-redux';
import store from './store/index.ts';
import './i18n';
import history from './utils/history.ts';
import { getAuthConfig } from './configs/auth-config.ts';

const onRedirectCallback = (appState: any) => {
  history.push(
    appState && appState.returnTo ? appState.returnTo : window.location.pathname
  );
};

const config = getAuthConfig();

const providerConfig: Auth0ProviderOptions = {
  domain: config.domain,
  clientId: config.clientId,
  onRedirectCallback,
  authorizationParams: {
    redirect_uri: window.location.origin + '/dashboard',
    audience: config.audience,
    useRefreshTokens: true,
    scope:
      'openid profile email read:current_user update:current_user_metadata',
  },
};

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Auth0Provider {...providerConfig}>
      <Provider store={store}>
        <ChakraProvider>
          <AppRoutes />
          <Tooltip id="my-tooltip" />
        </ChakraProvider>
      </Provider>
    </Auth0Provider>
  </React.StrictMode>
);

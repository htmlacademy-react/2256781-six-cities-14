import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './components';
import { AuthorizationStatus, OFFER_COUNT } from './const';
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const currentAuth = AuthorizationStatus.NoAuth;

root.render(
  <React.StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <App offerCount={OFFER_COUNT} authorization={currentAuth} />
      </BrowserRouter>
    </HelmetProvider>
  </React.StrictMode>
);

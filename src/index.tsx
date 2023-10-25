import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './components';
import { AuthorizationStatus, OFFER_COUNT } from './const';
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter } from 'react-router-dom';
import { offers } from './mocks/offers';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const currentAuth = AuthorizationStatus.NoAuth;

root.render(
  <React.StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <App offers={offers} authorization={currentAuth} />
      </BrowserRouter>
    </HelmetProvider>
  </React.StrictMode>
);

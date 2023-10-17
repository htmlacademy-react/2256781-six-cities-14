import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { FAVORITE_QUANTITY, OFFER_COUNT } from './const';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App quantity={FAVORITE_QUANTITY} offerCount={OFFER_COUNT} />
  </React.StrictMode>
);

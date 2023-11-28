import ReactDOM from 'react-dom/client';
import { store } from './store';
import { HelmetProvider } from 'react-helmet-async';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { App } from './components';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <HelmetProvider>
    <Provider store={store}>
      <ToastContainer />
      <App />
    </Provider>
  </HelmetProvider>
);

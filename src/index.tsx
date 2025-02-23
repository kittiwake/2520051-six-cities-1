import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app/app';
import { checkAuthAction, fetchOffersAction } from './store/api-actions';
import { store } from './store';
import { Provider } from 'react-redux';
import { HelmetProvider } from 'react-helmet-async';
import ErrorMessage from './components/error-message/error-message';


store.dispatch(fetchOffersAction());
store.dispatch(checkAuthAction());

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <HelmetProvider>
      <Provider store={store}>
        <ErrorMessage />
        <App />
      </Provider>
    </HelmetProvider>
  </React.StrictMode>
);

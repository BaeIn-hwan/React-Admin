import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '@/store';

ReactDOM.createRoot(document.getElementById('root')!).render(
  // React.StrictMode은 주석이 두 번 연속으로 나와서 주석
  // <React.StrictMode>
  // </React.StrictMode>,
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
);

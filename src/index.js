import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import CombinedProvider from './context/CombinedProvider.jsx';
import { Provider } from 'react-redux';
import { store } from './app/store.js';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <Provider store={store}>
    <CombinedProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </CombinedProvider>
</Provider>
  </React.StrictMode>
);

reportWebVitals();

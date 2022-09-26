import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './index.css';
import { CategoriesProvider, TransactionProvider } from './context';
import { BrowserRouter } from 'react-router-dom';
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <TransactionProvider>
        <CategoriesProvider>
          <App />
        </CategoriesProvider>
      </TransactionProvider>
    </BrowserRouter>
  </React.StrictMode>
);

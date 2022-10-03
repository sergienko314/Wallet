import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './index.css';
import { CategoriesProvider, TransactionProvider } from './context';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import   store  from './redux/store'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <TransactionProvider>
          <CategoriesProvider>
            <App />
          </CategoriesProvider>
        </TransactionProvider>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

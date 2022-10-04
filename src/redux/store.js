import { transactionReducer } from './transacitions/transaction.reduser';
import { configureStore, combineReducers } from '@reduxjs/toolkit';
import categoriesReducer from '../redux/categories/categoriesSlice';

const rootReducer = combineReducers({
  transactions: transactionReducer,
  categories: categoriesReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;

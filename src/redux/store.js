import transactionReducer from './transacitions/transactionSlice';
import { configureStore, combineReducers } from '@reduxjs/toolkit';
import categoriesReducer from '../redux/categories/categoriesSlice';
import authReducer from './auth/authSlice';

const rootReducer = combineReducers({
  auth: authReducer,
  transactions: transactionReducer,
  categories: categoriesReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;

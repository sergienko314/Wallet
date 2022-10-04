import { combineReducers, createStore } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';
import { transactionReducer } from './transacitions/transaction.reduser';
import { configureStore } from '@reduxjs/toolkit';
import categoriesReducer from '../redux/categories/categoriesSlice';

// const state = {
//   transactions: {
//     income: [],
//     deduction: [],
//   },
// };

const rootReducer = combineReducers({
  transactions: transactionReducer,
  categories: categoriesReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;

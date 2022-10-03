import { combineReducers, createStore } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';
import { transactionReducer } from './transacitions/transaction.reduser';

// const state = {
//   transactions: {
//     income: [],
//     deduction: [],
//   },
// };

const rootReducer = combineReducers({
  transactions: transactionReducer,
});

const store = createStore(rootReducer, composeWithDevTools());

export default store;

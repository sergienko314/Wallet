import { TRANSACTION_ADD_DEDUCTION, TRANSACTION_ADD_INCOME } from './constans';

const { combineReducers } = require('redux');

// const state = {
//   income: [],
//   deduction: [],
// };

const incomeReducer = (state = [], action) => {
  switch (action.type) {
    case TRANSACTION_ADD_INCOME:
      return [...state, action.payload];
    default:
      return state;
  }
};
const deductionReducer = (state = [], action) => {
  switch (action.type) {
    case TRANSACTION_ADD_DEDUCTION:
      return [...state, action.payload];
    default:
      return state;
  }
};

export const transactionReducer = combineReducers({
  income: incomeReducer,
  deduction: deductionReducer,
});

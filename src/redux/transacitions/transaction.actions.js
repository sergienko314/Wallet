import { TRANSACTION_ADD_INCOME, TRANSACTION_ADD_DEDUCTION } from './constans';

export const addIncome = transaction => {
  return { type: TRANSACTION_ADD_INCOME, payload: transaction };
};

export const addDeduction = transaction => {
  return { type: TRANSACTION_ADD_DEDUCTION, payload: transaction };
};

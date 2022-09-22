import { createContext, useState, useEffect } from 'react';
import { setToLS, getInitialState } from '../helpers';

export const TransactionContext = createContext();

const TransactionProvider = ({ children }) => {
  const [deduction, setDeduction] = useState(getInitialState('deduction',[]));
  const [income, setIncome] = useState(getInitialState('income',[]));

  const addTransaction = transaction => {
    const { transactionType } = transaction;
    if (transactionType === 'income') {
      setIncome(prewIncome => {
        return [...prewIncome, transaction];
      });
    }
    if (transactionType === 'deduction') {
      setDeduction(prewDeduction => {
        return [...prewDeduction, transaction];
      });
    }
  };
  useEffect(() => {
    setToLS('deduction', deduction);
  }, [deduction]);
  useEffect(() => {
    setToLS('income', income);
  }, [income]);
  return (
    <TransactionContext.Provider value={{ addTransaction, deduction, income }}>
      {children}
    </TransactionContext.Provider>
  );
};

export default TransactionProvider;

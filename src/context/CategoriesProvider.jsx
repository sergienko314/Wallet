import { createContext, useState, useEffect } from 'react';
import { getInitialState, setToLS } from '../helpers';
export const CategoriesContext = createContext();

const CategoriesProvider = ({ children }) => {
  const [deductionCategories, setDeductionCategories] = useState(
    getInitialState('deductionCategories', [])
  );
  const [incomeCategories, setincomeCategories] = useState(
    getInitialState('incomeCategories', [])
  );

  const removeCategory = (id, transactionType) => {
    transactionType === 'deduction' &&
      setDeductionCategories(preState => preState.filter(cat => cat.id !== id));
    transactionType === 'income' &&
      setincomeCategories(preState => preState.filter(cat => cat.id !== id));
  };

  const addCategory = (category, transactionType) => {
    if (transactionType === 'deduction') {
      setDeductionCategories(prewDeduction => {
        return [...prewDeduction, category];
      });
    }
    if (transactionType === 'income') {
      setincomeCategories(prewIncome => {
        return [...prewIncome, category];
      });
    }
  };

  useEffect(() => {
    setToLS('deductionCategories', deductionCategories);
  }, [deductionCategories]);
  useEffect(() => {
    setToLS('incomeCategories', incomeCategories);
  }, [incomeCategories]);

  return (
    <CategoriesContext.Provider
      value={{
        removeCategory,
        addCategory,
        deductionCategories,
        incomeCategories,
      }}
    >
      {children}
    </CategoriesContext.Provider>
  );
};

export default CategoriesProvider;

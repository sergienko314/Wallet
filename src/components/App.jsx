import { useState, useEffect } from 'react';
import Conteiner from './Conteiner/Conteiner';
import MainPage from './MainPage';
import TransactionHistoryPage from './TransactionHistoryPage';
import { setToLS, getInitialState } from '../helpers';

export const App = () => {
  const [activePage, setActivePage] = useState('main');
  const [deductionCategories, setDeductionCategories] = useState(
    getInitialState('deductionCategories')
  );
  const [incomeCategories, setincomeCategories] = useState(
    getInitialState('incomeCategories')
  );

  const changePageHandler = (page = 'main') => {
    setActivePage(page);
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
  const removeCategory = (id, transactionType) => {
    transactionType === 'deduction' &&
      setDeductionCategories(preState => preState.filter(cat => cat.id !== id));
    transactionType === 'income' &&
      setincomeCategories(preState => preState.filter(cat => cat.id !== id));
  };

 
  useEffect(() => {
    setToLS('deductionCategories', deductionCategories);
  }, [deductionCategories]);
  useEffect(() => {
    setToLS('incomeCategories', incomeCategories);
  }, [incomeCategories]);

  return (
    <Conteiner>
      <>
        {activePage === 'main' ? (
          <MainPage
            removeCategory={removeCategory}
            changePageHandler={changePageHandler}
            addCategory={addCategory}
            categories={{
              deductionCategories,
              incomeCategories,
            }}
          />
        ) : (
          <TransactionHistoryPage
            transactionType={activePage}
            changePageHandler={changePageHandler}
            // transactions={activePage === 'deduction' ? deduction : income}
          />
        )}
      </>
    </Conteiner>
  );
};

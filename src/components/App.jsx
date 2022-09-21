import { useState, useEffect } from 'react';
import Conteiner from './Conteiner/Conteiner';
import MainPage from './MainPage';
import TransactionHistoryPage from './TransactionHistoryPage';

const getInitialState = key => {
  return JSON.parse(localStorage.getItem(key)) || [];
};
const setToLS = (key, data) => localStorage.setItem(key, JSON.stringify(data));

export const App = () => {
  const [activePage, setActivePage] = useState('main');
  const [deduction, setDeduction] = useState(getInitialState('deduction'));
  const [income, setIncome] = useState(getInitialState('income'));
  const [deductionCategories, setDeductionCategories] = useState(
    getInitialState('deductionCategories')
  );
  const [incomeCategories, setincomeCategories] = useState(
    getInitialState('incomeCategories')
  );

  const changePageHandler = (page = 'main') => {
    setActivePage(page);
  };

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
    setToLS('deduction', deduction);
  }, [deduction]);
  useEffect(() => {
    setToLS('income', income);
  }, [income]);
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
            addTransaction={addTransaction}
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
            transactions={activePage === 'deduction' ? deduction : income}
          />
        )}
      </>
    </Conteiner>
  );
};

import { useState } from 'react';
import Conteiner from './Conteiner/Conteiner';
import MainPage from './MainPage';
import TransactionHistoryPage from './TransactionHistoryPage';

export const App = () => {
  const [activePage, setActivePage] = useState('main');

  const changePageHandler = (page = 'main') => {
    setActivePage(page);
  };

  return (
    <Conteiner>
      <>
        {activePage === 'main' ? (
          <MainPage
            changePageHandler={changePageHandler}
          />
        ) : (
          <TransactionHistoryPage
            transactionType={activePage}
            changePageHandler={changePageHandler}
          />
        )}
      </>
    </Conteiner>
  );
};

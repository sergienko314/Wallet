import { useState } from 'react';
import Conteiner from './Conteiner/Conteiner';
import MainPage from './MainPage';
import TransactionHistoryPage from './TransactionHistoryPage';
import { Route, Routes } from 'react-router-dom';

export const App = () => {
  // const [activePage, setActivePage] = useState('main');

  // const changePageHandler = (page = 'main') => {
  //   setActivePage(page);
  // };

  return (
    <Conteiner>
      <>
        {/* {activePage === 'main' ? (
          <MainPage changePageHandler={changePageHandler} />
        ) : (
          <TransactionHistoryPage
            transactionType={activePage}
            changePageHandler={changePageHandler}
          />
        )} */}
        <Routes>
          <Route path="/transaction" element={<MainPage />} />
          <Route
            path="/history/:transactionType"
            element={<TransactionHistoryPage />}
          />
        </Routes>
      </>
    </Conteiner>
  );
};

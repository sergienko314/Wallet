
import Conteiner from './Conteiner/Conteiner';
import MainPage from '../pages/MainPage';
import TransactionHistoryPage from '../pages/TransactionHistoryPage';
import { Route, Routes, Navigate } from 'react-router-dom';

export const App = () => {

  return (
    <Conteiner>
      <>
        <Routes>
          <Route path="/transaction/*" element={<MainPage />} />
          <Route
            path="/history/:transactionType"
            element={<TransactionHistoryPage />}
          />
          <Route path='*' element={<Navigate to='/transaction'/>} />
        </Routes>
      </>
    </Conteiner>
  );
};

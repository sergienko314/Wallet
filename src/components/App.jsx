import Conteiner from './Conteiner/Conteiner';
import MainPage from '../pages/MainPage';
import TransactionHistoryPage from '../pages/TransactionHistoryPage';
import { Route, Routes, Navigate } from 'react-router-dom';
import RegistrationPage from 'pages/RegistrationPage/RegistrationPage';
import { getIsLoggedIn } from 'redux/auth/authSelectors';
import { useSelector } from 'react-redux';
import LoginPage from 'pages/LoginPage/LoginPage';

export const App = () => {
  const isLoggedIn = useSelector(getIsLoggedIn);
  return (
    <Conteiner>
      <>
        {isLoggedIn ? (
          <Routes>
            <Route path="/transaction/*" element={<MainPage />} />
            <Route
              path="/history/:transactionType"
              element={<TransactionHistoryPage />}
            />
            <Route path="*" element={<Navigate to="/transaction" />} />
          </Routes>
        ) : (
          <Routes>
            <Route path="/register" element={<RegistrationPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="*" element={<Navigate to="/register" />} />
          </Routes>
        )}
      </>
    </Conteiner>
  );
};

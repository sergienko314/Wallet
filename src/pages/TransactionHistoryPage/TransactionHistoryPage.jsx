import { useContext, useState } from 'react';
import { useParams } from 'react-router-dom';

import Header from '../../components/Header';
import {
  Item,
  List,
  MainWrapper,
  DateContainer,
  Summary,
  Currency,
} from './TransactionHistoryPage.styled';
import { TransactionContext } from '../../context';

const TransactionHistoryPage = () => {
  const { transactionType } = useParams();
  const [idMenu, setIdMenu] = useState('');
  const transactionsValue = useContext(TransactionContext);
  const transactions = transactionsValue[transactionType];

  const handleOpenMenu = id => {
    setIdMenu(prevIdMenu => {
      return prevIdMenu === id ? '' : id;
    });
  };
  return (
    <>
      <Header to={'/transaction'} title={transactionType === 'deduction' ? 'Расходы' : 'Доходы'} />
      <List>
        {transactions.map(({ id, date, time, summary, currency, comment }) => {
          return (
            <Item key={id}>
              <MainWrapper>
                <div>
                  <DateContainer>
                    <span>{date}</span>
                    <span>{time}</span>
                  </DateContainer>
                  <p>{comment}</p>
                </div>
                <div>
                  <Summary>{summary}</Summary>
                  <Currency>{currency}</Currency>
                </div>
              </MainWrapper>
              <button type="button" onClick={() => handleOpenMenu(id)}>
                ...
              </button>
              {id === idMenu && (
                <ul>
                  <li>
                    <button>Edit</button>
                  </li>
                  <li>
                    <button
                      onClick={() =>
                        transactionsValue.removeTransaction(id, transactionType)
                      }
                    >
                      Remove
                    </button>
                  </li>
                </ul>
              )}
            </Item>
          );
        })}
      </List>
    </>
  );
};

export default TransactionHistoryPage;

import Header from '../Header';
import {
  Item,
  List,
  MainWrapper,
  DateContainer,
  Summary,
  Currency,
} from './TransactionHistoryPage.styled';

const TransactionHistoryPage = ({
  changePageHandler,
  transactionType,
  transactions,
}) => {
  return (
    <>
      <Header
        title={transactionType === 'deduction' ? 'Расходы' : 'Доходы'}
        changePageHandler={changePageHandler}
      />
      <List>
        {transactions.map(({ date, time, summary, currency, comment }) => {
          return (
            <Item>
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
              <button type="button">...</button>
            </Item>
          );
        })}
      </List>
    </>
  );
};

export default TransactionHistoryPage;

import { Component } from 'react';
import Conteiner from './Conteiner/Conteiner';
import MainPage from './MainPage';
import TransactionHistoryPage from './TransactionHistoryPage';

export class App extends Component {
  state = { activePage: 'main', deduction: [], income: [] };

  changePageHandler = (page = 'main') => {
    this.setState({ activePage: page });
  };

  addTransaction = transaction => {
    const { transactionType } = transaction;
    this.setState(prev => {
      return { [transactionType]: [...prev[transactionType], transaction] };
    });
  };

  render() {
    const { deduction, income, activePage } = this.state;
    return (
      <Conteiner>
        {
          <>
            {activePage === 'main' ? (
              <MainPage
                changePageHandler={this.changePageHandler}
                addTransaction={this.addTransaction}
              />
            ) : (
              <TransactionHistoryPage
                transactionType={activePage}
                changePageHandler={this.changePageHandler}
                transactions={activePage === 'deduction' ? deduction : income}
              />
            )}
          </>
        }
      </Conteiner>
    );
  }
}

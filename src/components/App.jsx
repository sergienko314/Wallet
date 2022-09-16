import { Component } from 'react';
import Conteiner from './Conteiner/Conteiner';
import MainPage from './MainPage';
import TransactionHistoryPage from './TransactionHistoryPage';

export class App extends Component {
  state = { activePage: 'main', transactions: [] };

  changePageHandler = page => {
    this.setState({ activePage: page });
  };

  addTransaction = transaction => {
    this.setState(prev => {
      return { transactions: [...prev.transactions, transaction] };
    });
  };

  render() {
    return (
      <Conteiner>
        {
          <>
            {this.state.activePage === 'main' ? (
              <MainPage
                changePageHandler={this.changePageHandler}
                addTransaction={this.addTransaction}
              />
            ) : (
              <TransactionHistoryPage
                transactionType={this.state.activePage}
                changePageHandler={this.changePageHandler}
                transactions={this.state.transactions}
              />
            )}
          </>
        }
      </Conteiner>
    );
  }
}

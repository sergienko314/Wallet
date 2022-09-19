import { Component } from 'react';
import Conteiner from './Conteiner/Conteiner';
import MainPage from './MainPage';
import TransactionHistoryPage from './TransactionHistoryPage';

export class App extends Component {
  state = {
    activePage: 'main',
    deduction: [],
    income: [],
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.deduction !== this.state.deduction) {
      localStorage.setItem('deduction', JSON.stringify(this.state.deduction))
    }

        if (prevState.income !== this.state.income) {
      localStorage.setItem('income', JSON.stringify(this.state.income))
    }
  }

  componentDidMount() {
    const deduction = JSON.parse(localStorage.getItem('deduction'))
    const income = JSON.parse(localStorage.getItem('income'))
    this.setState({
    deduction,
    income,
    })
  }



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

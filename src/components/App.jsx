import { Component } from 'react';
import Conteiner from './Conteiner/Conteiner';
import MainPage from './MainPage';
import TransactionHistoryPage from './TransactionHistoryPage';

export class App extends Component {
  state = {
    activePage: 'main',
    deduction: [],
    income: [],
    deductionCategories: [],
    incomeCategories: [],
  };
  

  componentDidUpdate(prevProps, prevState) {
    if (prevState.deduction !== this.state.deduction) {
      localStorage.setItem('deduction', JSON.stringify(this.state.deduction));
    }

    if (prevState.income !== this.state.income) {
      localStorage.setItem('income', JSON.stringify(this.state.income));
    }
    if (prevState.deductionCategories !== this.state.deductionCategories) {
      localStorage.setItem(
        'deductionCategories',
        JSON.stringify(this.state.deductionCategories)
      );
    }
    if (prevState.incomeCategories !== this.state.incomeCategories) {
      localStorage.setItem(
        'incomeCategories',
        JSON.stringify(this.state.incomeCategories)
      );
    }
  }

  componentDidMount() {
    const deduction = JSON.parse(localStorage.getItem('deduction')) || [];
    const income = JSON.parse(localStorage.getItem('income')) || [];
    const deductionCategories =
      JSON.parse(localStorage.getItem('deductionCategories')) || [];
    const incomeCategories =
      JSON.parse(localStorage.getItem('incomeCategories')) || [];
    this.setState({
      deduction,
      income,
      incomeCategories,
      deductionCategories,
    });
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

  // {
  //   id: '1',
  //   category: 'Food',
  // },

  addCategory = (category, transactionType) => {
    this.setState(prev => {
      return transactionType === 'deduction'
        ? { deductionCategories: [...prev.deductionCategories, category] }
        : { incomeCategories: [...prev.incomeCategories, category] };
    });
  };

  removeCategory = (id, transactionType) => {
  this.setState((prev) =>
    (transactionType === 'deduction')
      ? { deductionCategories: prev.deductionCategories.filter((cat) => (cat.id !== id)) }
      : { incomeCategories: prev.incomeCategories.filter((cat) => (cat.id !== id)) } )
  }


  render() {
    const {
      deduction,
      income,
      activePage,
      deductionCategories,
      incomeCategories,
    } = this.state;
    return (
      <Conteiner>
        {
          <>
            {activePage === 'main' ? (
              <MainPage
                removeCategory={this.removeCategory}
                changePageHandler={this.changePageHandler}
                addTransaction={this.addTransaction}
                addCategory={this.addCategory}
                categories={{
                  deductionCategories,
                  incomeCategories,
                }}
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

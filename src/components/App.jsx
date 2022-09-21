import { useState } from 'react';
import Conteiner from './Conteiner/Conteiner';
import MainPage from './MainPage';
import TransactionHistoryPage from './TransactionHistoryPage';

export const App = () => {
  const [activePage, setActivePage] = useState('main');
  const [deduction, setDeduction] = useState([]);
  const [income, setIncome] = useState([]);
  const [deductionCategories, setDeductionCategories] = useState([]);
  const [incomeCategories, setincomeCategories] = useState([]);

  const changePageHandler = (page = 'main') => {
    setActivePage(page);
  };

  const addTransaction = transaction => {
    const { transactionType } = transaction;
    if (transactionType === 'income') {
      setIncome(prewIncome => {
        return [...prewIncome, transaction];
      });
    }
    if (transactionType === 'deduction') {
      setDeduction(prewDeduction => {
        return [...prewDeduction, transaction];
      });
    }
  };

  const addCategory = (category, transactionType) => {
    if (transactionType === 'deduction') {
      setDeductionCategories(prewDeduction => {
        return [...prewDeduction, category];
      });
    }
    if (transactionType === 'income') {
      setincomeCategories(prewIncome => {
        return [...prewIncome, category];
      });
    }
  }
    const removeCategory = (id, transactionType) => {
      // this.setState((prev) =>
      //   (transactionType === 'deduction')
      //     ? { deductionCategories: prev.deductionCategories.filter((cat) => (cat.id !== id)) }
      //     : { incomeCategories: prev.incomeCategories.filter((cat) => (cat.id !== id)) } )
    };

    // const {
    //   deduction,
    //   income,
    //   activePage,
    //   deductionCategories,
    //   incomeCategories,
    // } = this.state;
    return (
      <Conteiner>
        <>
          {activePage === 'main' ? (
            <MainPage
              removeCategory={removeCategory}
              changePageHandler={changePageHandler}
              addTransaction={addTransaction}
              addCategory={addCategory}
              categories={{
                deductionCategories,
                incomeCategories,
              }}
            />
          ) : (
            <TransactionHistoryPage
              transactionType={activePage}
              changePageHandler={changePageHandler}
              transactions={activePage === 'deduction' ? deduction : income}
            />
          )}
        </>
      </Conteiner>
    );
  };


//  componentDidUpdate(prevProps, prevState) {
//     if (prevState.deduction !== this.state.deduction) {
//       localStorage.setItem('deduction', JSON.stringify(this.state.deduction));
//     }

//     if (prevState.income !== this.state.income) {
//       localStorage.setItem('income', JSON.stringify(this.state.income));
//     }
//     if (prevState.deductionCategories !== this.state.deductionCategories) {
//       localStorage.setItem(
//         'deductionCategories',
//         JSON.stringify(this.state.deductionCategories)
//       );
//     }
//     if (prevState.incomeCategories !== this.state.incomeCategories) {
//       localStorage.setItem(
//         'incomeCategories',
//         JSON.stringify(this.state.incomeCategories)
//       );
//     }
//   }

//   componentDidMount() {
//     const deduction = JSON.parse(localStorage.getItem('deduction')) || [];
//     const income = JSON.parse(localStorage.getItem('income')) || [];
//     const deductionCategories =
//       JSON.parse(localStorage.getItem('deductionCategories')) || [];
//     const incomeCategories =
//       JSON.parse(localStorage.getItem('incomeCategories')) || [];
//     this.setState({
//       deduction,
//       income,
//       incomeCategories,
//       deductionCategories,
//     });
//   }

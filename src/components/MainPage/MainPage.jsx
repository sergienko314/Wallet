import Header from '../Header';
import TransactionForm from '../TransactionForm';
import MainButtons from '../MainButtons';
import Categories from 'components/Categories';
import { Component } from 'react';

class MainPage extends Component {
  state = {
    isCategories: false,
    date: '',
    time: '',
    category: 'food',
    summary: '',
    currency: 'uah',
    comments: '',
    transactionType: 'deduction',
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  openCategoriesHandler = () => {
    this.setState({ isCategories: true });
  };
  closeCategoriesHandler = () => {
    this.setState({ isCategories: false });
  };

  setCategory = category => {
    this.setState({ category });
    this.closeCategoriesHandler();
  };

  render() {
    // const data = { date, time, category, summary, currency, comments };
    const { isCategories, ...dataForm } = this.state;
    const { addTransaction, changePageHandler, addCategory, categories } =
      this.props;
    return (
      <>
        {!this.state.isCategories ? (
          <>
            <Header title="Wallet" />
            <main>
              <TransactionForm
                openCategoriesHandler={this.openCategoriesHandler}
                dataForm={dataForm}
                handleChange={this.handleChange}
                cbHandleSubmit={addTransaction}
              />
              <MainButtons changePageHandler={changePageHandler} />
            </main>
          </>
        ) : (
          <>
            <Header
              title="Categories"
              changePageHandler={this.closeCategoriesHandler}
            />
            <main>
              <Categories
                setCategory={this.setCategory}
                categoriesList={
                  dataForm.transactionType === 'deduction'
                    ? categories.deductionCategories
                    : categories.incomeCategories
                }
                addCategory={addCategory}
                transactionType={dataForm.transactionType}
              />
            </main>
          </>
        )}
      </>
    );
  }
}
export default MainPage;

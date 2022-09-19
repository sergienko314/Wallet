import Header from '../Header';
import TransactionForm from '../TransactionForm';
import MainButtons from '../MainButtons';
import Categories from 'components/Categories';
import categoriesList from 'data/categories';
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
                cbHandleSubmit={this.props.addTransaction}
              />
              <MainButtons changePageHandler={this.props.changePageHandler} />
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
                categoriesList={categoriesList}
              />
            </main>
          </>
        )}
      </>
    );
  }
}
export default MainPage;

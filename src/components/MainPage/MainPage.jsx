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
              />
              <MainButtons changePageHandler={this.props.changePageHandler} />
            </main>
          </>
        ) : (
          <>
            <Header
              title="Categories"
              btnContent="<00000="
              changePageHandler={this.closeCategoriesHandler}
            />
            <main>
              <Categories categoriesList={categoriesList} />
            </main>
          </>
        )}
      </>
    );
  }
}
export default MainPage;

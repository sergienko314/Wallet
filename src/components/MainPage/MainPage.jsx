import Header from '../Header';
import TransactionForm from '../TransactionForm';
import MainButtons from '../MainButtons';
import Categories from 'components/Categories';
import categoriesList from 'data/categories';
import { Component } from 'react';

class MainPage extends Component {
  state = {
    isCategories: false,
  };
  openCategoriesHandler = () => {
    this.setState({ isCategories: true });
  };
  closeCategoriesHandler = () => {
    this.setState({ isCategories: false });
  };
  render() {
    return (
      <>
        {!this.state.isCategories ? (
          <>
            <Header title="Wallet" />
            <main>
              <TransactionForm
                openCategoriesHandler={this.openCategoriesHandler}
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

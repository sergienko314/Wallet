import Header from '../Header';
import TransactionForm from '../TransactionForm';
import MainButtons from '../MainButtons';
import Categories from 'components/Categories';
import categoriesList from 'data/categories';

const MainPage = ({ changePageHandler }) => (
  <>
    <Header title="Wallet" btnContent="=" />
    <main>
      <TransactionForm />
      <MainButtons changePageHandler={changePageHandler} />
      <Categories categoriesList={categoriesList} />
    </main>
  </>
);
export default MainPage;

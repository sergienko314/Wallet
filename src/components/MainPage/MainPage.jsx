import Header from '../Header';
import TransactionForm from '../TransactionForm';
import MainButtons from '../MainButtons';
import Categories from 'components/Categories';
import categoriesList from 'data/categories';

const MainPage = () => (
  <>
    <Header title="Wallet" btnContent="=" />
    <main>
      <TransactionForm />
      <MainButtons />
      <Categories categoriesList={categoriesList} />
    </main>
  </>
);
export default MainPage;

import { useState } from 'react';
import Header from 'components/Header';
import TransactionForm from 'components/TransactionForm';
import MainButtons from 'components/MainButtons';
import Categories from 'components/Categories';
import { Route, Routes } from 'react-router-dom';

const initialForm = {
  date: '',
  time: '',
  category: 'food',
  summary: '',
  currency: 'uah',
  comments: '',
  transactionType: 'deduction',
};

const MainPage = ({
  removeCategory,

  changePageHandler,
  addCategory,
  // categories,
}) => {
  const [form, setForm] = useState(initialForm);
  const [isCategories, setIsCategories] = useState(false);

  const handleChange = e => {
    const { name, value } = e.target;

    setForm(prevForm => {
      return { ...prevForm, [name]: value };
    });
  };

  const openCategoriesHandler = () => {
    setIsCategories(true);
  };
  const closeCategoriesHandler = () => {
    setIsCategories(false);
  };

  const setCategory = category => {
    setForm(prevForm => {
      return { ...prevForm, category };
    });
    closeCategoriesHandler();
  };

  const reset = () => {
    setForm(initialForm);
  };

  return (
    <>
      <Routes>
        <Route index element={<>
          <Header title="Wallet" />
          <main>
            <TransactionForm
              openCategoriesHandler={openCategoriesHandler}
              dataForm={form}
              handleChange={handleChange}
              reset={reset}
            />
            <MainButtons changePageHandler={changePageHandler} />
          </main>
        </>}
        />
        <Route path="categories" element={
          <>
          <Header
            title="Categories"
            changePageHandler={closeCategoriesHandler}
          />
          <main>
            <Categories
              removeCategory={removeCategory}
              setCategory={setCategory}
              addCategory={addCategory}
              transactionType={form.transactionType}
            />
          </main>
        </>}
        />
      </Routes>
      {/* {!isCategories ? (
        <>
          <Header title="Wallet" />
          <main>
            <TransactionForm
              openCategoriesHandler={openCategoriesHandler}
              dataForm={form}
              handleChange={handleChange}
              reset={reset}
            />
            <MainButtons changePageHandler={changePageHandler} />
          </main>
        </>
      ) : (
        <>
          <Header
            title="Categories"
            changePageHandler={closeCategoriesHandler}
          />
          <main>
            <Categories
              removeCategory={removeCategory}
              setCategory={setCategory}
              addCategory={addCategory}
              transactionType={form.transactionType}
            />
          </main> */}
        {/* </>
      )} */}
    </>
  );
};
export default MainPage;

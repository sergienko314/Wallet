import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import {
  // addDeductionCategory,
  // addIncomeCategory,
  removeDeductionCategory,
  removeIncomeCategory,
} from '../../redux/categories/categoriesSlice';
import {
  addIncomeCategory,
  addDeductionCategory,
  getCategoriesOperation,
} from '../../redux/categories/categoriesOperations';
import { useDispatch, useSelector } from 'react-redux';

const Categories = ({ transactionType, setCategory }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategoriesOperation(transactionType)());

    console.log(getCategoriesOperation(transactionType).pending);
  }, [dispatch, transactionType]);

  const categories = useSelector(({ categories }) => categories);

  const [input, setInput] = useState('');
  const [idMenu, setIdMenu] = useState('');

  const categoriesList =
    transactionType === 'deduction' ? categories.deduction : categories.income;

  const handleChange = e => {
    setInput(e.target.value.trimStart());
  };
  const reset = () => {
    setInput('');
  };
  const handleOpenMenu = id => {
    setIdMenu(prevIdMenu => {
      return prevIdMenu === id ? '' : id;
    });
  };

  const removeCategory = id =>
    transactionType === 'deduction'
      ? dispatch(removeDeductionCategory(id))
      : dispatch(removeIncomeCategory(id));

  const handleSubmit = e => {
    e.preventDefault();

    if (!input) {
      alert('enter smth');
      return;
    }
    const inputTrimed = input.trimEnd();

    transactionType === 'deduction'
      ? dispatch(
          addDeductionCategory({
            category: inputTrimed,
          })
        )
      : dispatch(
          addIncomeCategory({
            category: inputTrimed,
          })
        );

    reset();
  };

  return (
    <>
      <ul>
        {categoriesList.map(({ id, category }) => (
          <li key={id}>
            <div>
              <button
                onClick={() => {
                  setCategory(category);
                }}
              >
                {category}
              </button>
              <button onClick={() => handleOpenMenu(id)}>...</button>
              {id === idMenu && (
                <ul>
                  <li>
                    <button>Edit</button>
                  </li>
                  <li>
                    <button onClick={() => removeCategory(id)}>Remove</button>
                  </li>
                </ul>
              )}
            </div>
          </li>
        ))}
      </ul>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="New category"
          name="input"
          value={input}
          onChange={handleChange}
        />
        <button type="submit">+</button>
      </form>
    </>
  );
};

//   addCategory,
// transactionType,
// categoriesList,
// setCategory,
// removeCategory,

Categories.propTypes = {
  transactionType: PropTypes.string.isRequired,
  setCategory: PropTypes.func.isRequired,
};
export default Categories;

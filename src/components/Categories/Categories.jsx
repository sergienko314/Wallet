import { CategoriesContext } from '../../context';
import PropTypes from 'prop-types';
import { useContext } from 'react';
import { useState } from 'react';

const Categories = ({ transactionType, setCategory }) => {
  const value = useContext(CategoriesContext);

  const [input, setInput] = useState('');
  const [idMenu, setIdMenu] = useState('');
  const categoriesList =
    transactionType === 'deduction'
      ? value.deductionCategories
      : value.incomeCategories;

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
  const handleSubmit = e => {
    e.preventDefault();

    if (!input) {
      alert('enter smth');
      return;
    }
    const inputTrimed = input.trimEnd();
    const normalizedInput = inputTrimed.toLowerCase();

    categoriesList.some(elem => elem.category.toLowerCase() === normalizedInput)
      ? alert('i have this category')
      : value.addCategory(
          {
            id: Date.now(),
            category: inputTrimed,
          },
          transactionType
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
                    <button
                      onClick={() => value.removeCategory(id, transactionType)}
                    >
                      Remove
                    </button>
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

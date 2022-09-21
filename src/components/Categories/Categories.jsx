import PropTypes from 'prop-types';
import { useState } from 'react';

const Categories = ({
  addCategory,
  transactionType,
  categoriesList,
  setCategory,
  removeCategory,
}) => {
  const [input, setInput] = useState('');
  const [idMenu, setIdMenu] = useState('');

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
      : addCategory(
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
                    <button onClick={() => removeCategory(id, transactionType)}>
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
  categoriesList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
      category: PropTypes.string.isRequired,
    })
  ),
  addCategory: PropTypes.func.isRequired,
  transactionType: PropTypes.string.isRequired,
  setCategory: PropTypes.func.isRequired,
  removeCategory: PropTypes.func.isRequired,
};
export default Categories;

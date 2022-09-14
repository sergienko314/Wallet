import PropTypes from 'prop-types';
import Header from 'components/Header';

const Categories = ({ categoriesList }) => {
  return (
    <>
      <Header title="Categories" />
      <ul>
        {categoriesList.map(({ id, category }) => (
          <li key={id}>
            <div>
              <button>{category}</button>
              <button>...</button>
            </div>
          </li>
        ))}
      </ul>
      <form>
        <input type="text" placeholder="New category"></input>
        <button type="button">+</button>
      </form>
    </>
  );
};

Categories.propTypes = {
  categoriesList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
      category: PropTypes.string.isRequired,
    })
  ),
};
export default Categories;

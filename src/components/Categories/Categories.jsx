import PropTypes from 'prop-types';
import { Component } from 'react';

class Categories extends Component {
  state = {
    input: '',
  };

  handleChange = e => {
    this.setState({ input: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();

    const { addCategory, transactionType } = this.props;
    addCategory(
      {
        id: Date.now(),
        category: this.state.input,
      },
      transactionType
    );
  };

  render() {
    const { categoriesList, setCategory } = this.props;
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
                <button>...</button>
              </div>
            </li>
          ))}
        </ul>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="New category"
            name="input"
            value={this.state.input}
            onChange={this.handleChange}
          />
          <button type="submit">+</button>
        </form>
      </>
    );
  }
}

Categories.propTypes = {
  categoriesList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
      category: PropTypes.string.isRequired,
    })
  ),
};
export default Categories;

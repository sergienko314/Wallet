import { Component } from 'react';

class TransactionForm extends Component {
  render() {
    const { date, time, category, summary, currency, comments } = this.state;
    return (
      <form>
        <label>
          <p>Date</p>
          <input
            type="date"
            name="date"
            value={date}
            min="2000-01-01"
            max="2100-12-31"
            onChange={this.handleChange}
          />
        </label>
        <label>
          <p>Time</p>
          <input
            type="time"
            name="time"
            value={time}
            onChange={this.handleChange}
          />
        </label>
        <label htmlFor="category">
          <p>Category</p>
          <input
            type="button"
            value={category}
            name="category"
            onClick={this.props.openCategoriesHandler}
            onChange={this.handleChange}
          ></input>
        </label>
        <label>
          <p>Summary</p>
          <input
            type="text"
            value={summary}
            name="summary"
            placeholder="Summary"
            onChange={this.handleChange}
          ></input>
        </label>
        <label>
          <p>Currency</p>
          <input
            type="button"
            name="currency"
            value={currency}
            onChange={this.handleChange}
          ></input>
        </label>
        <label>
          <p>Comments</p>
          <input
            type="text"
            value={comments}
            name="comments"
            placeholder="Comments"
            onChange={this.handleChange}
          ></input>
        </label>
      </form>
    );
  }
}

export default TransactionForm;

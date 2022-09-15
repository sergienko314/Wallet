const TransactionForm = ({
  cbHandleSubmit,
  dataForm,
  handleChange,
  openCategoriesHandler,
}) => {
  const handleSubmit = e => {
    e.preventDefault();
    cbHandleSubmit(dataForm);
  };
  const { date, time, category, summary, currency, comments } = dataForm;

  return (
    <form onSubmit={handleSubmit}>
      <label>
        <p>Date</p>
        <input
          type="date"
          name="date"
          value={date}
          min="2000-01-01"
          max="2100-12-31"
          onChange={handleChange}
        />
      </label>
      <label>
        <p>Time</p>
        <input type="time" name="time" value={time} onChange={handleChange} />
      </label>
      <label htmlFor="category">
        <p>Category</p>
        <input
          type="button"
          value={category}
          name="category"
          onClick={openCategoriesHandler}
          onChange={handleChange}
        ></input>
      </label>
      <label>
        <p>Summary</p>
        <input
          type="text"
          value={summary}
          name="summary"
          placeholder="Summary"
          onChange={handleChange}
        ></input>
      </label>
      <label>
        <p>Currency</p>
        <input
          type="button"
          name="currency"
          value={currency}
          onChange={handleChange}
        ></input>
      </label>
      <label>
        <p>Comments</p>
        <input
          type="text"
          value={comments}
          name="comments"
          placeholder="Comments"
          onChange={handleChange}
        ></input>
      </label>
      <button type="submit">Save</button>
    </form>
  );
};

export default TransactionForm;

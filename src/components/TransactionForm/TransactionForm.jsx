const TransactionForm = ({ openCategoriesHandler }) => {
  return (
    <form>
      <label>
        <p>Date</p>
        <input
          type="date"
          name="date"
          value="2022-09-12"
          min="2000-01-01"
          max="2100-12-31"
          onChange={() => null}
        />
      </label>
      <label>
        <p>Time</p>
        <input type="time" name="time" value="12:00" onChange={() => null} />
      </label>
      <label htmlFor="category">
        <p>Category</p>
        <input
          type="button"
          value={'Food'}
          onClick={openCategoriesHandler}
          onChange={() => null}
        ></input>
      </label>
      <label>
        <p>Summary</p>
        <input type="text" placeholder="Summary"></input>
      </label>
      <label>
        <p>Currency</p>
        <input type="button" value={'UAH'} onChange={() => null}></input>
      </label>
      <label>
        <p>Comments</p>
        <input type="text" placeholder="Comments"></input>
      </label>
    </form>
  );
};

export default TransactionForm;

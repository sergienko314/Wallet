import {
  Form,
  Label,
  InputTitle,
  Input,
  Submit,
} from './TransactionForm.styled';
import sprite from '../../assets/icons/sprite.svg';

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
  const {
    date,
    time,
    category,
    summary,
    currency,
    comments,
    transactionType,
  } = dataForm;

  return (
    <Form onSubmit={handleSubmit}>
      <label>
        <span>Income</span>
        <input
          type="radio"
          name="transactionType"
          value="income"
          onChange={handleChange}
          checked={transactionType === 'income'}
        />
      </label>
      <label>
        <span>Deduction</span>
        <input
          type="radio"
          name="transactionType"
          value="deduction"
          onChange={handleChange}
          checked={transactionType === 'deduction'}
        />
      </label>

      <Label>
        <InputTitle>Date</InputTitle>
        <Input
          type="date"
          name="date"
          value={date}
          min="2000-01-01"
          max="2100-12-31"
          onChange={handleChange}
        />
      </Label>
      <Label>
        <InputTitle>Time</InputTitle>
        <Input type="time" name="time" value={time} onChange={handleChange} />
      </Label>
      <Label htmlFor="category">
        <InputTitle>Category</InputTitle>
        <Input
          type="button"
          value={category}
          name="category"
          onClick={openCategoriesHandler}
          onChange={handleChange}
        ></Input>
      </Label>
      <Label>
        <InputTitle>Summary</InputTitle>
        <Input
          type="text"
          value={summary}
          name="summary"
          placeholder="Summary"
          onChange={handleChange}
        ></Input>
      </Label>
      <Label>
        <InputTitle>Currency</InputTitle>
        <Input
          type="button"
          name="currency"
          value={currency}
          onChange={handleChange}
        ></Input>
      </Label>
      <Label>
        <InputTitle>Comments</InputTitle>
        <Input
          type="text"
          value={comments}
          name="comments"
          placeholder="Comments"
          onChange={handleChange}
        ></Input>
      </Label>
      <Submit type="submit">
        <svg>
          <use href={sprite + '#icon-checkmark'}></use>
        </svg>
      </Submit>
    </Form>
  );
};

export default TransactionForm;

import {
  Form,
  Label,
  InputTitle,
  Input,
  Submit,
} from './TransactionForm.styled';
import sprite from '../../assets/icons/sprite.svg';
//import { useContext } from 'react';
//import { TransactionContext } from '../../context';
import {
  addIncome,
  addDeduction,
} from '../../redux/transacitions/transaction.actions';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const TransactionForm = ({
  dataForm,
  handleChange,
  openCategoriesHandler,
  reset,
}) => {
  const navigate = useNavigate();

  const dispatch = useDispatch();
  //const { addTransaction } = useContext(TransactionContext);

  const handleSubmit = e => {
    e.preventDefault();
    dataForm.id = Date.now();
    // addTransaction(dataForm);
    dataForm.transactionType === 'income' && dispatch(addIncome(dataForm));
    dataForm.transactionType === 'deduction' &&
      dispatch(addDeduction(dataForm));
    reset();
  };
  const { date, time, category, summary, currency, comments, transactionType } =
    dataForm;

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
          onClick={() => {
            navigate('categories');
          }}
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

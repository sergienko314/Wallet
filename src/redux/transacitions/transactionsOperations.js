import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  addIncomeTransactionsAPI,
  addDedactionTransactionsAPI,
} from 'services/fireBaseAPI';

export const addIncomeTransactions = createAsyncThunk(
  'transaction/add/income',
  async (data, thunkAPI) => {
    try {
      const transactions = await addIncomeTransactionsAPI(data);
      return transactions;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addDeductionsTransactions = createAsyncThunk(
  'transaction/add/dedaction',
  async (data, thunkAPI) => {
    console.log(thunkAPI);
    try {
      const transactions = await addDedactionTransactionsAPI(data);
      return transactions;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

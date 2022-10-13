import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  addIncomeTransactionsAPI,
  addDedactionTransactionsAPI,
  getTransactionsAPI,
} from 'services/fireBaseAPI';

export const addIncomeTransactions = createAsyncThunk(
  'transaction/add/income',
  async (data, thunkAPI) => {
    const { localId, idToken } = thunkAPI.getState().auth;
    try {
      const transactions = await addIncomeTransactionsAPI(
        data,
        localId,
        idToken
      );
      return transactions;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addDeductionsTransactions = createAsyncThunk(
  'transaction/add/dedaction',
  async (data, thunkAPI) => {
    const { localId, idToken } = thunkAPI.getState().auth;

    console.log(thunkAPI);
    try {
      const transactions = await addDedactionTransactionsAPI(
        data,
        localId,
        idToken
      );
      return transactions;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getTransactions = createAsyncThunk(
  'transactions/get',
  async (_, thunkAPI) => {
    try {
      const transacitions = await getTransactionsAPI();
      return transacitions;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

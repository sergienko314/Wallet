import { createSlice } from '@reduxjs/toolkit';
import {
  addIncomeTransactions,
  addDeductionsTransactions,
  getTransactions,
} from './transactionsOperations';

const transacitionsSlice = createSlice({
  name: 'transactions',
  initialState: {
    deduction: [],
    income: [],
    isLoading: false,
    error: null,
  },
  extraReducers: {
    [addIncomeTransactions.pending]: (state, action) => {
      state.isLoading = true;
    },
    [addIncomeTransactions.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.income.push(payload);
    },
    [addIncomeTransactions.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
    [addDeductionsTransactions.pending]: (state, action) => {
      state.isLoading = true;
    },
    [addDeductionsTransactions.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.deduction.push(payload);
    },
    [addDeductionsTransactions.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
    [getTransactions.pending]: state => {
      state.isLoading = true;
    },
    [getTransactions.fulfilled]: (state, { payload }) => {
      return { ...state, isLoading: false, ...payload };
    },
    [getTransactions.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
  },
});

export default transacitionsSlice.reducer;

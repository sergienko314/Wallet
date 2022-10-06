import { createSlice } from '@reduxjs/toolkit';
import {
  addIncomeCategory,
  addDeductionCategory,
} from './categoriesOperations';

export const categoriesSlice = createSlice({
  name: 'categories',
  initialState: {
    deduction: [],
    income: [],
    isLoading: false,
    error: null,
  },
  reducers: {
    removeDeductionCategory: (state, { payload }) => {
      state.deduction = state.deduction.filter(({ id }) => id !== payload);
      //   return { ...state, deduction: state.deduction.filter(({ id }) => id !== payload)};
    },
    removeIncomeCategory: (state, { payload }) => {
      state.income = state.income.filter(({ id }) => id !== payload);
    },
  },
  extraReducers: {
    [addIncomeCategory.pending]: state => {
      state.isLoading = true;
    },
    [addIncomeCategory.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.income.push(payload);
    },
    [addIncomeCategory.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
    [addDeductionCategory.pending]: state => {
      state.isLoading = true;
    },
    [addDeductionCategory.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.deduction.push(payload);
    },
    [addDeductionCategory.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
  },
});

export const {
  // addIncomeCategory,
  // addDeductionCategory,
  removeIncomeCategory,
  removeDeductionCategory,
} = categoriesSlice.actions;

export default categoriesSlice.reducer;

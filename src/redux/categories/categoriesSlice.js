import { createSlice } from '@reduxjs/toolkit';

export const categoriesSlice = createSlice({
  name: 'categories',
  initialState: {
    deduction: [],
    income: [],
  },
  reducers: {
    removeDeductionCategory: (state, { payload }) => {
      state.deduction = state.deduction.filter(({ id }) => id !== payload);
      //   return { ...state, deduction: state.deduction.filter(({ id }) => id !== payload)};
    },
    removeIncomeCategory: (state, { payload }) => {
      state.income = state.income.filter(({ id }) => id !== payload);
    },
    addDeductionCategory: (state, { payload }) => {
      state.deduction.push(payload);
    },
    addIncomeCategory: (state, { payload }) => {
      state.income.push(payload);
    },
  },
});

export const {
  addIncomeCategory,
  addDeductionCategory,
  removeIncomeCategory,
  removeDeductionCategory,
} = categoriesSlice.actions;

export default categoriesSlice.reducer

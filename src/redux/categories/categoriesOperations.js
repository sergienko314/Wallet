import { createAsyncThunk } from '@reduxjs/toolkit';

import {
  addIncomeCategoryAPI,
  addDeductionCategoryAPI,
} from '../../services/fireBaseAPI';

export const addIncomeCategory = createAsyncThunk(
  'categories/add/income',
  async (category, thunkAPI) => {
    try {
      const data = await addIncomeCategoryAPI(category);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addDeductionCategory = createAsyncThunk(
  'categories/add/deduction',
  async (category, thunkAPI) => {
    try {
      const data = await addDeductionCategoryAPI(category);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

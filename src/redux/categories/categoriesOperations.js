import { createAsyncThunk } from '@reduxjs/toolkit';
import { getConditionCategory } from 'helpers/conditionCategories';

import {
  addIncomeCategoryAPI,
  addDeductionCategoryAPI,
  getCategoriesAPI,
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
  },
  {
    condition: getConditionCategory('income'),
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
  },
  {
    condition: getConditionCategory('deduction'),
  }
);

export const getIncomeCategories = createAsyncThunk(
  'categories/get/income',
  async (_, thunkAPI) => {
    try {
      const data = await getCategoriesAPI('income');
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getDeductionCategories = createAsyncThunk(
  'categories/get/deduction',
  async (_, thunkAPI) => {
    try {
      const data = await getCategoriesAPI('deduction');
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export function getCategoriesOperation(transactionType) {
  const actionThunk = createAsyncThunk(
    `categories/get/${transactionType}`,
    async (_, thunkAPI) => {
      try {
        const data = await getCategoriesAPI(transactionType);
        return data;
      } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
      }
    },
    {
      condition(_, { getState }) {
        const { [transactionType]: category } = getState().categories;
        return !category.length;
      },
    }
  );
  return actionThunk;
}

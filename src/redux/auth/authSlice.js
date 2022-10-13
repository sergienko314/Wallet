import { createSlice } from '@reduxjs/toolkit';
import { register, login } from './authOperations';

const initialState = {
  isLoggedIn: false,
  idToken: null,
  email: null,
  refreshToken: null,
  localId: null,
  isLoading: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [register.pending]: (state, action) => {
      state.isLoading = true;
    },
    [register.fulfilled]: (state, { payload }) => {
      state.idToken = payload.idToken;
      state.email = payload.email;
      state.refreshToken = payload.refreshToken;
      state.localId = payload.localId;
      state.isLoading = false;
    },
    [register.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    [login.pending]: (state, action) => {
      state.isLoading = true;
    },
    [login.fulfilled]: (state, { payload }) => {
      state.idToken = payload.idToken;
      state.email = payload.email;
      state.refreshToken = payload.refreshToken;
      state.localId = payload.localId;
      state.isLoading = false;
    },
    [login.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export default authSlice.reducer;

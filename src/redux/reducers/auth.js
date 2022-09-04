
import { createSlice } from "@reduxjs/toolkit";
import { login, register } from "../asyncActions/auth";

const initialState = {
  token: null,
  error: null,
  message: null
};

const auth = createSlice({
  name: "auth",
  initialState,
  reducers: {
    clearAuth: (state) => {
      state.token = null
      state.message = null
      state.error = null
    },
    logout: () => {
      return initialState;
    },
  },
  extraReducers: (build) => {
    build.addCase(login.pending, (state) => {
        state.token = null
        state.message = null
        state.error = null
    });

    build.addCase(login.fulfilled, (state, action) => {
        const token = action.payload.token;
        if (token) {
            state.token = token;
            state.message = action.payload.message;
        } else {
          state.error = action.payload.error;
        }
    });

    build.addCase(register.pending, (state) => {
        state.message = null
        state.error = null
    });

    build.addCase(register.fulfilled, (state, action) => {
        const error = action.payload.error;
        if (!error) {
            state.message = action.payload.message;
        } else {
          state.error = action.payload.error;
        }
    });
  }
});

export { login, register };
export const { clearAuth, logout } = auth.actions;
export default auth.reducer;

import { createSlice } from "@reduxjs/toolkit";
import { postTopup, postTransfer, getTransactions, getTransactionById } from "../asyncActions/transactions";

const initialState = {
  data: null,
  error: null,
  message: null
};

const transactions = createSlice({
  name: "transactions",
  initialState,
  reducers: {
    
  },
  extraReducers: (build) => {
    build.addCase(getTransactionById.pending, (state) => {
      state.data = null
      state.message = null
      state.error = null
    });
    build.addCase(getTransactionById.fulfilled, (state, action) => {
        const error = action.payload.error;
        if (!error) {
            state.message = action.payload.message;
            state.data = action.payload.data;
        } else {
          state.error = action.payload.error;
        }
    });

    build.addCase(getTransactions.pending, (state) => {
      state.data = null
      state.message = null
      state.error = null
    });
    build.addCase(getTransactions.fulfilled, (state, action) => {
        const error = action.payload.error;
        if (!error) {
            state.message = action.payload.message;
            state.data = action.payload.data;
        } else {
          state.error = action.payload.error;
        }
    });

    build.addCase(postTransfer.pending, (state) => {
      state.data = null
      state.message = null
      state.error = null
    });
    build.addCase(postTransfer.fulfilled, (state, action) => {
        const error = action.payload.error;
        if (!error) {
            state.message = action.payload.message;
            state.data = action.payload.data;
        } else {
          state.error = action.payload.error;
        }
    });

    build.addCase(postTopup.pending, (state) => {
        state.data = null
        state.message = null
        state.error = null
    });
    build.addCase(postTopup.fulfilled, (state, action) => {
        const error = action.payload.error;
        if (!error) {
            state.message = action.payload.message;
            state.data = action.payload.data;
        } else {
          state.error = action.payload.error;
        }
    });
  }
});

export { getTransactions, postTransfer, postTopup, getTransactionById };
export default transactions.reducer;

import { createSlice } from "@reduxjs/toolkit";
import { postTransfer } from "../asyncActions/transactions";

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
  }
});

export { postTransfer };
export default transactions.reducer;

import { createSlice } from "@reduxjs/toolkit";
import { getUsersData, getUserDataById, getUserPin, patchUserPin, patchUserImage, patchUserFullname } from "../asyncActions/users";

const initialState = {
  data: null,
  error: null,
  message: null
};

const users = createSlice({
  name: "users",
  initialState,
  reducers: {
    
  },
  extraReducers: (build) => {
    build.addCase(getUsersData.pending, (state) => {
        state.data = null
        state.message = null
        state.error = null
    });
    build.addCase(getUsersData.fulfilled, (state, action) => {
        const error = action.payload.error;
        if (!error) {
            state.message = action.payload.message;
            state.data = action.payload.data;
        } else {
          state.error = action.payload.error;
        }
    });

    build.addCase(getUserDataById.pending, (state) => {
        state.data = null
        state.message = null
        state.error = null
    });
    build.addCase(getUserDataById.fulfilled, (state, action) => {
        const error = action.payload.error;
        if (!error) {
            state.message = action.payload.message;
            state.data = action.payload.data;
        } else {
          state.error = action.payload.error;
        }
    });

    build.addCase(getUserPin.pending, (state) => {
        state.data = null
        state.message = null
        state.error = null
    });
    build.addCase(getUserPin.fulfilled, (state, action) => {
        const error = action.payload.error;
        if (!error) {
            state.message = action.payload.message;
            state.data = action.payload.data;
        } else {
          state.error = action.payload.error;
        }
    });

    build.addCase(patchUserPin.pending, (state) => {
        state.data = null
        state.message = null
        state.error = null
    });
    build.addCase(patchUserPin.fulfilled, (state, action) => {
        const error = action.payload.error;
        if (!error) {
            state.message = action.payload.message;
            state.data = action.payload.data;
        } else {
          state.error = action.payload.error;
        }
    });

    build.addCase(patchUserImage.pending, (state) => {
      state.message = null
      state.error = null
    });
    build.addCase(patchUserImage.fulfilled, (state, action) => {
        const error = action.payload.error;
        if (!error) {
            state.message = action.payload.message;
        } else {
          state.error = action.payload.error;
        }
    });

    build.addCase(patchUserFullname.pending, (state) => {
      state.message = null
      state.error = null
    });
    build.addCase(patchUserFullname.fulfilled, (state, action) => {
        const error = action.payload.error;
        if (!error) {
            state.message = action.payload.message;
        } else {
          state.error = action.payload.error;
        }
    });
  }
});

export { getUsersData, getUserDataById, getUserPin, patchUserPin, patchUserImage, patchUserFullname };
export default users.reducer;
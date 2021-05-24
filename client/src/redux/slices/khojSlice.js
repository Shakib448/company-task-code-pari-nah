import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { khojApi } from "../../api/authApi";

export const khojPost = createAsyncThunk("khoj/post", async (data) => {
  return khojApi(data);
});

export const khojGet = createAsyncThunk("khoj/get", async (data) => {
  return khojApi(data);
});
const khojSlice = createSlice({
  name: "khoj",
  initialState: {
    loading: false,
    success: true,
    khoj: [],
  },
  extraReducers: {
    [khojPost.pending]: (state, action) => {
      state.loading = true;
      state.success = false;
    },
    [khojPost.fulfilled]: (state, action) => {
      state.loading = false;
      state.userInfo = action.payload;
      state.success = true;
    },
    [khojPost.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.error;
      state.success = false;
    },
  },
});

export default khojSlice.reducer;

// Selector

export const khojSelector = (state) => state.entities.khoj;

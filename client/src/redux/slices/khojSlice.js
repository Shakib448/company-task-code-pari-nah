import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { khojApi } from "../../api/authApi";

export const khojPost = createAsyncThunk("user/register", async (data) => {
  return khojApi(data);
});

const khojSlice = createSlice({
  name: "khoj",
  initialState: {
    loading: false,
    khoj: [],
  },
  reducers: {
    khoj: (state, action) => {
      state.khoj.push(action.payload);
    },
  },
});

export const { khoj } = khojSlice.actions;

export default khojSlice.reducer;

// Selector

export const khojSelector = (state) => state.entities.khoj;

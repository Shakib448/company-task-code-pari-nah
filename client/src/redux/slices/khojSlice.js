import { createSlice } from "@reduxjs/toolkit";

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

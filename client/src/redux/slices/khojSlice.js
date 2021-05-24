import { createSlice } from "@reduxjs/toolkit";

const khojSlice = createSlice({
  name: "user",
  initialState: {
    loading: false,
    success: true,
    khoj: [],
  },
  reducers: {
    khoj: (state, action) => {
      console.log(action.payload);

      //   state.khoj.push(action.payload);
    },
  },
});

export const { khoj } = khojSlice.actions;

export default khojSlice.reducer;

// Selector

export const userInfo = (state) => state.entities.user;

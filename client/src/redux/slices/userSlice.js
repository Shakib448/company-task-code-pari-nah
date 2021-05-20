import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {},
  reducers: {
    addUser: (state, action) => {},
  },
});

export const { addUser } = userSlice.actions;

export default userSlice.reducer;

// Selector

export const userList = (state) => state.entities.shoppingCart;

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { loginApi } from "../../api/authApi";

export const loginAuthUser = createAsyncThunk(
  "user/login",
  async (authData) => {
    const data = await loginApi(authData);
    return data;
  }
);

const userSlice = createSlice({
  name: "user",
  initialState: { loading: true, userInfo: [], error: {} },
  reducers: {
    loginUser: (state, action) => {},
  },
  extraReducers: {
    [loginAuthUser.pending]: (state, action) => {
      state.loading = true;
    },
    [loginAuthUser.fulfilled]: (state, action) => {
      state.loading = false;

      state.userInfo = action.payload;
    },
    [loginAuthUser.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.error;
    },
  },
});

export const { addUser } = userSlice.actions;

export default userSlice.reducer;

// Selector

export const userList = (state) => state.entities.shoppingCart;

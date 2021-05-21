import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { registerApi, loginApi } from "../../api/authApi";

export const loginAuthUser = createAsyncThunk(
  "user/login",
  async (authData) => {
    return loginApi(authData);
  }
);
export const registerAuthUser = createAsyncThunk(
  "user/register",
  async (registerData) => {
    await registerApi(registerData);
  }
);

const userSlice = createSlice({
  name: "user",
  initialState: { loading: true, userInfo: [], error: {}, registerInfo: [] },
  reducers: {
    errorMessage: (state, action) => {
      console.log(action.payload);
    },
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
      state.error = "Invalid Email and Password";
    },
    [registerAuthUser.pending]: (state, action) => {
      state.loading = true;
    },
    [registerAuthUser.fulfilled]: (state, action) => {
      state.loading = false;
      state.registerInfo = action.payload;
    },
    [registerAuthUser.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.error;
    },
  },
});

export const { errorMessage } = userSlice.actions;

export default userSlice.reducer;

// Selector

export const userList = (state) => state.entities.shoppingCart;

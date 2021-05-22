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
    return registerApi(registerData);
  }
);

const userInfoFromStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : [];

const userSlice = createSlice({
  name: "user",
  initialState: {
    loading: false,
    userInfo: userInfoFromStorage,
    error: {},
    registerInfo: [],
    success: false,
  },
  reducers: {
    logOut: (state, action) => {
      state.userInfo = [];
      state.success = false;
    },
  },
  extraReducers: {
    [loginAuthUser.pending]: (state, action) => {
      state.loading = true;
      state.success = false;
    },
    [loginAuthUser.fulfilled]: (state, action) => {
      state.loading = false;
      state.userInfo = action.payload;
      state.success = true;
    },
    [loginAuthUser.rejected]: (state, action) => {
      state.loading = false;
      state.error = "Invalid Email and Password";
      state.success = false;
    },
    [registerAuthUser.pending]: (state, action) => {
      state.loading = true;
      state.success = false;
    },
    [registerAuthUser.fulfilled]: (state, action) => {
      state.loading = false;
      state.registerInfo = action.payload;
      state.success = true;
    },
    [registerAuthUser.rejected]: (state, action) => {
      state.loading = false;
      state.error = "User already exists";
      state.success = false;
    },
  },
});

export const { logOut } = userSlice.actions;

export default userSlice.reducer;

// Selector

export const userInfo = (state) => state.entities.user;

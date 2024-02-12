import { createSlice } from "@reduxjs/toolkit";
const userSlice = createSlice({
  name: "user",
  initialState: {
    username: "",
    email: "",
    currentUser: null,
    isFetching: false,
    isSuccess: false,
    error: false,
  },
  reducers: {
    registerStart: (state) => {
      state.isFetching = false;
    },
    registerSuccess: (state, action) => {
      state.isFetching = true;
      state.email = action.payload.user.email;
      state.username = action.payload.user.name;
    },
    registerFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    loginStart: (state) => {
      state.isFetching = true;
    },
    loginSuccess: (state, action) => {
      state.isFetching = false;
      state.currentUser = action.payload;
    },
    loginFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    logoutUser: (state) => {
      state.currentUser = null;
      state.loading = false;
      state.error = false;
    },
  },
});
export const {
  registerStart,
  registerSuccess,
  registerFailure,
  logoutUser,
  loginStart,
  loginSuccess,
  loginFailure,
} = userSlice.actions;
export default userSlice.reducer;

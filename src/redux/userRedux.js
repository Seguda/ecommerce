import { createSlice } from "@reduxjs/toolkit";
const userSlice = createSlice({
  name: "user",
  initialState: {
    currentUser: null,
    login: {
      loginSuccess: false,
      loginFailure: false,
      loginFailureMessage: "",
    },
    register: {
      registerSuccess: false,
      registerFailure: false,
      registerFailureMessage: "",
    },
  },
  reducers: {
    registerStart: (state) => {
      state.register.registerSuccess = false;
      state.register.registerFailure = false;
    },
    registerSuccess: (state, action) => {
      state.register.registerSuccess = true;
      state.register.registerFailure = false;
      state.currentUser = action.payload;
    },
    registerFailure: (state) => {
      state.register.registerFailure = true;
      state.register.registerSuccess = false;
      state.register.registerFailureMessage = "";
    },
    loginStart: (state) => {
      state.login.loginFailure = false;
      state.login.loginSuccess = false;
    },
    loginSuccess: (state, action) => {
      state.login.loginFailure = false;
      state.login.loginSuccess = true;
      state.currentUser = action.payload;
    },
    loginFailure: (state) => {
      state.login.loginFailure = true;
      state.login.loginSuccess = false;
      state.login.loginFailureMessage = "";
    },
    logoutUser: (state) => {
      state.currentUser = null;
      state.login.loginFailure = false;
      state.login.loginSuccess = false;
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

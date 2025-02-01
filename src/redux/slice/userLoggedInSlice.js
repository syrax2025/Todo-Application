import { createSlice } from "@reduxjs/toolkit";

const userLoggedInSlice = createSlice({
  name: "userLoggedIn",
  initialState: {
    loginStatus: false,
  },
  reducers: {
    setLoginStatus: (state, action) => {
      state.loginStatus = action.payload;
    },
  },
});

export const { setLoginStatus } = userLoggedInSlice.actions;
export const userLoggedInRedcuer = userLoggedInSlice.reducer;

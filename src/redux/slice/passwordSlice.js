import { createSlice } from "@reduxjs/toolkit";

const passwordSlice = createSlice({
  name: "password",
  initialState: {
    password: "",
  },
  reducers: {
    setPassword: (state, action) => {
      state.password = action.payload;
    },
  },
});

export const { setPassword } = passwordSlice.actions;

export const passwordReducer = passwordSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

const todoNameSlice = createSlice({
  name: "todoName",
  initialState: {
    todoName: "",
  },
  reducers: {
    setTodoName: (state, action) => {
      state.todoName = action.payload;
    },
  },
});

export const { setTodoName } = todoNameSlice.actions;
export const todoNameReducer = todoNameSlice.reducer;

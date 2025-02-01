import { configureStore } from "@reduxjs/toolkit";
import {
  emailReducer,
  nameReducer,
  passwordReducer,
  todoNameReducer,
  todosReducer,
  userLoggedInRedcuer,
} from "../index";

const store = configureStore({
  reducer: {
    name: nameReducer,
    email: emailReducer,
    password: passwordReducer,
    todo: todoNameReducer,
    todos: todosReducer,
    userLoggedIn: userLoggedInRedcuer,
  },
});

export default store;

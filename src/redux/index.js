import { emailReducer, setEmail } from "./slice/emailSlice";
import { nameReducer, setName } from "./slice/nameSlice";
import { passwordReducer, setPassword } from "./slice/passwordSlice";
import { setTodoName, todoNameReducer } from "./slice/todoNameSlice";
import { setTodos, todosReducer } from "./slice/todosSlice";
import { setLoginStatus, userLoggedInRedcuer } from "./slice/userLoggedInSlice";
import store from "./store/store";

export {
  emailReducer,
  nameReducer,
  passwordReducer,
  setEmail,
  setLoginStatus,
  setName,
  setPassword,
  setTodoName,
  setTodos,
  store,
  todoNameReducer,
  todosReducer,
  userLoggedInRedcuer,
};

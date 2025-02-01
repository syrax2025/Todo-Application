import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter, useNavigate } from "react-router-dom";
import configureMockStore from "redux-mock-store";
import TodoList from "../../components/TodoList";
import { setTodoName, setTodos } from "../../redux";

const mockStore = configureMockStore([]);

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: jest.fn(),
}));

describe("TodoList Component", () => {
  let store;

  beforeEach(() => {
    store = mockStore({
      todos: { todos: [] },
      todo: { todoName: "" },
      userLoggedIn: { loginStatus: true },
    });

    store.dispatch = jest.fn();
  });

  test("renders input box and add button", () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <TodoList />
        </BrowserRouter>
      </Provider>
    );

    expect(screen.getByPlaceholderText(/Enter Todo/i)).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /Add/i })).toBeInTheDocument();
  });

  test("dispatches setTodoName action on input change", () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <TodoList />
        </BrowserRouter>
      </Provider>
    );

    const inputElement = screen.getByPlaceholderText(/Enter Todo/i);
    fireEvent.change(inputElement, { target: { value: "New Task" } });

    expect(store.dispatch).toHaveBeenCalledWith(setTodoName("New Task"));
  });

  test("dispatches setTodos when adding a new todo", () => {
    const dispatch = jest.fn();
    const store = {
      getState: jest.fn().mockReturnValue({
        todos: { todos: [{ id: 1, title: "Existing Task", completed: false }] },
        todo: { todoName: "New Task" },
        userLoggedIn: { loginStatus: true },
      }),
      dispatch,
      subscribe: jest.fn(),
    };

    render(
      <Provider store={store}>
        <BrowserRouter>
          <TodoList />
        </BrowserRouter>
      </Provider>
    );

    const addButton = screen.getByRole("button", { name: /Add/i });
    fireEvent.click(addButton);

    expect(dispatch).toHaveBeenCalledWith(
      setTodos([
        { id: 1, title: "Existing Task", completed: false },
        { id: 2, title: "New Task", completed: false },
      ])
    );
  });

  test("marks a todo as completed when clicking Done button", () => {
    const dispatch = jest.fn();
    const store = {
      getState: jest.fn().mockReturnValue({
        todos: { todos: [{ id: 1, title: "Task 1", completed: false }] },
        todo: { todoName: "" },
        userLoggedIn: { loginStatus: true },
      }),
      dispatch,
      subscribe: jest.fn(),
    };

    render(
      <Provider store={store}>
        <BrowserRouter>
          <TodoList />
        </BrowserRouter>
      </Provider>
    );

    const doneButton = screen.getByRole("button", { name: /Done/i });
    fireEvent.click(doneButton);

    expect(dispatch).toHaveBeenCalledWith(
      setTodos([{ id: 1, title: "Task 1", completed: true }])
    );
  });

  test("redirects to signin page if not logged in", () => {
    const dispatch = jest.fn();
    const store = {
      getState: jest.fn().mockReturnValue({
        todos: { todos: [{ id: 1, title: "Task 1", completed: false }] },
        todo: { todoName: "" },
        userLoggedIn: { loginStatus: false },
      }),
      dispatch,
      subscribe: jest.fn(),
    };

    const mockNavigate = jest.fn();
    useNavigate.mockReturnValue(mockNavigate);

    render(
      <Provider store={store}>
        <BrowserRouter>
          <TodoList />
        </BrowserRouter>
      </Provider>
    );

    expect(mockNavigate).toHaveBeenCalledWith("/signin");
  });
});

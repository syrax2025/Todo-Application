import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";
import configureStore from "redux-mock-store";
import SignIn from "../../components/SignIn";
import { setEmail, setPassword } from "../../redux";

const mockStore = configureStore([]);

describe("SignIn Component", () => {
  let store;

  beforeEach(() => {
    store = mockStore({
      email: { email: "" },
      password: { password: "" },
    });
    store.dispatch = jest.fn();
  });

  test("renders SignIn component correctly", () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <SignIn />
        </MemoryRouter>
      </Provider>
    );

    const headingElement = screen.getByText(
      /Enter your information to Sign In/i
    );
    const emailElement = screen.getByPlaceholderText("Email");
    const passwordElement = screen.getByPlaceholderText("Password");
    expect(headingElement).toBeInTheDocument();
    expect(emailElement).toBeInTheDocument();
    expect(passwordElement).toBeInTheDocument();
  });

  test("validates empty email and password", () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <SignIn />
        </MemoryRouter>
      </Provider>
    );

    const signInButton = screen.getByRole("button", { name: "Sign In" });

    fireEvent.click(signInButton);

    const passwordErrorMessage = screen.getByText("Password is required");
    const emailErrorMessage = screen.getByText("Email is required");

    expect(passwordErrorMessage).toBeInTheDocument();
    expect(emailErrorMessage).toBeInTheDocument();
  });

  test("dispatches actions when user enters input", () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <SignIn />
        </MemoryRouter>
      </Provider>
    );

    fireEvent.change(screen.getByPlaceholderText("Email"), {
      target: { value: "test@example.com" },
    });
    fireEvent.change(screen.getByPlaceholderText("Password"), {
      target: { value: "password123" },
    });

    expect(store.dispatch).toHaveBeenCalledWith(setEmail("test@example.com"));
    expect(store.dispatch).toHaveBeenCalledWith(setPassword("password123"));
  });
});

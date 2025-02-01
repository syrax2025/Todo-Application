import { fireEvent, render, screen } from "@testing-library/react";
import { useSelector } from "react-redux";
import { MemoryRouter, useNavigate } from "react-router-dom";
import Navbar from "../../components/NavBar";

jest.mock("react-redux", () => ({
  useDispatch: jest.fn(),
  useSelector: jest.fn(),
}));

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: jest.fn(),
}));

describe("Navbar Test Component", () => {
  test("Checking if Application Name is rendering or not", () => {
    render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>
    );
    const headingElement = screen.getByText(/To-Do App/i);
    expect(headingElement).toBeInTheDocument();
  });

  test("renders SignOut link when logged in", () => {
    useSelector.mockReturnValue(true); // simulate user is logged in
    render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>
    );

    const signOutLink = screen.getByRole("link", { name: /signout/i });

    expect(signOutLink).toBeInTheDocument();
  });

  test("renders SignIn link when logged in", () => {
    useSelector.mockReturnValue(false);
    render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>
    );

    const signOutLink = screen.getByRole("link", { name: /signin/i });

    expect(signOutLink).toBeInTheDocument();
  });

  test("navigates to home when clicking on the logo", () => {
    const mockNavigate = jest.fn();
    useNavigate.mockReturnValue(mockNavigate);

    render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>
    );

    const logo = screen.getByText(/To-Do App/i);
    fireEvent.click(logo);

    expect(mockNavigate).toHaveBeenCalledWith("/");
  });
});

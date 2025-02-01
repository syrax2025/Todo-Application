import { fireEvent, render, screen } from "@testing-library/react";
import { MemoryRouter, useNavigate } from "react-router-dom";
import { Home } from "../../components";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: jest.fn(),
}));

describe("Home Component Testing", () => {
  test("Testing Heading ", () => {
    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    );

    const headingElement = screen.getByText(
      /Create, manage, and complete your tasks effortlessly/i
    );
    expect(headingElement).toBeInTheDocument();
  });

  test("renders the 'Get Started' button", () => {
    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    );
    const button = screen.getByRole("button", { name: /get started/i });
    expect(button).toBeInTheDocument();
  });

  test("navigates to signup page when 'Get Started' button is clicked", () => {
    const mockNavigate = jest.fn();
    useNavigate.mockReturnValue(mockNavigate);

    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    );
    const button = screen.getByRole("button", { name: /get started/i });
    fireEvent.click(button);
    expect(mockNavigate).toHaveBeenCalledWith("/signup");
  });
});

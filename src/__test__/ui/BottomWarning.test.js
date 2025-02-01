import { render, screen } from "@testing-library/react";
import React from "react";
import { MemoryRouter } from "react-router-dom";
import { BottomWarning } from "../../ui";

import "@testing-library/jest-dom";

describe("BottomWarning Component", () => {
  test("should render the label text", () => {
    render(
      <MemoryRouter>
        <BottomWarning
          label="This is a warning"
          buttonText="Click Here"
          redirectTo="/home"
        />
      </MemoryRouter>
    );
    const labelElement = screen.getByText(/This is a warning/i);
    expect(labelElement).toBeInTheDocument();
  });

  test("should render the button text and link correctly", () => {
    render(
      <MemoryRouter>
        <BottomWarning
          label="This is a warning"
          buttonText="Click Here"
          redirectTo="/home"
        />
      </MemoryRouter>
    );
    const buttonElement = screen.getByText(/Click Here/i);
    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toHaveAttribute("href", "/home");
  });

  test("should have the correct link style", () => {
    render(
      <MemoryRouter>
        <BottomWarning
          label="This is a warning"
          buttonText="Click Here"
          redirectTo="/home"
        />
      </MemoryRouter>
    );
    const buttonElement = screen.getByText(/Click Here/i);
    expect(buttonElement).toHaveStyle("color: black");
    expect(buttonElement).toHaveStyle("text-decoration: underline");
  });
});

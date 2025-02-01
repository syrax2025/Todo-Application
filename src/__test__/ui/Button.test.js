import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import { Button } from "../../ui";

describe("Button Component", () => {
  test("should render the button with the correct label", () => {
    render(<Button label="Click Me" onClick={() => {}} />);
    const buttonElement = screen.getByText(/Click Me/i);
    expect(buttonElement).toBeInTheDocument();
  });

  test("should call onClick when the button is clicked", () => {
    const handleClick = jest.fn();
    render(<Button label="Click Me" onClick={handleClick} />);
    const buttonElement = screen.getByText(/Click Me/i);
    fireEvent.click(buttonElement);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  test("should have large size by default", () => {
    render(<Button label="Click Me" onClick={() => {}} />);
    const buttonElement = screen.getByText(/Click Me/i);
    expect(buttonElement).toHaveClass("w-full");
  });

  test("should apply extra classes", () => {
    render(
      <Button label="Click Me" onClick={() => {}} extraClasses="bg-blue-500" />
    );
    const buttonElement = screen.getByText(/Click Me/i);
    expect(buttonElement).toHaveClass("bg-blue-500");
  });
});

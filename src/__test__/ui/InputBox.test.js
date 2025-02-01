import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import { InputBox } from "../../ui";

describe("InputBox Component", () => {
  test("should render with the correct label if provided", () => {
    render(
      <InputBox
        label="Username"
        placeholder="Enter your username"
        onChange={() => {}}
        value=""
      />
    );
    const labelElement = screen.getByText(/Username/i);
    expect(labelElement).toBeInTheDocument();
  });

  test("should not render label if the label is 'default'", () => {
    render(
      <InputBox
        label="default"
        placeholder="Enter your username"
        onChange={() => {}}
        value=""
      />
    );
    const labelElement = screen.queryByText(/default/i);
    expect(labelElement).toBeNull();
  });

  test("should accept input changes", () => {
    const handleChange = jest.fn();
    render(
      <InputBox
        label="Username"
        placeholder="Enter your username"
        onChange={handleChange}
        value="test"
      />
    );
    const inputElement = screen.getByPlaceholderText(/Enter your username/i);
    fireEvent.change(inputElement, { target: { value: "new value" } });
    expect(handleChange).toHaveBeenCalledTimes(1);
  });

  test("should apply correct styles for size", () => {
    const { rerender } = render(
      <InputBox
        label="Username"
        placeholder="Enter your username"
        onChange={() => {}}
        size="large"
        value=""
      />
    );
    const inputElement = screen.getByPlaceholderText(/Enter your username/i);
    expect(inputElement).toHaveClass("w-full");

    rerender(
      <InputBox
        label="Username"
        placeholder="Enter your username"
        onChange={() => {}}
        size="small"
        value=""
      />
    );
    expect(inputElement).toHaveClass("w-auto");
  });

  test("should apply extra classes correctly", () => {
    render(
      <InputBox
        label="Username"
        placeholder="Enter your username"
        onChange={() => {}}
        extraClasses="bg-gray-200"
        value=""
      />
    );
    const inputElement = screen.getByPlaceholderText(/Enter your username/i);
    expect(inputElement).toHaveClass("bg-gray-200");
  });

  test("should render with default type as text", () => {
    render(
      <InputBox
        label="Username"
        placeholder="Enter your username"
        onChange={() => {}}
        value=""
      />
    );
    const inputElement = screen.getByPlaceholderText(/Enter your username/i);
    expect(inputElement).toHaveAttribute("type", "text");
  });

  test("should render with the correct type when specified", () => {
    render(
      <InputBox
        label="Password"
        placeholder="Enter your password"
        onChange={() => {}}
        type="password"
        value=""
      />
    );
    const inputElement = screen.getByPlaceholderText(/Enter your password/i);
    expect(inputElement).toHaveAttribute("type", "password");
  });
});

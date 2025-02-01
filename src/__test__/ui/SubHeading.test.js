import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import React from "react";
import { SubHeading } from "../../ui";

describe("SubHeading Component", () => {
  test("should render the label text", () => {
    render(<SubHeading label="This is a subheading" />);
    const subheadingElement = screen.getByText(/This is a subheading/i);
    expect(subheadingElement).toBeInTheDocument();
  });

  test("should apply correct styles", () => {
    render(<SubHeading label="This is a subheading" />);
    const subheadingElement = screen.getByText(/This is a subheading/i);
    expect(subheadingElement).toHaveClass("text-md");
    expect(subheadingElement).toHaveClass("text-gray-500");
    expect(subheadingElement).toHaveClass("text-center");
    expect(subheadingElement).toHaveClass("pt-4");
    expect(subheadingElement).toHaveClass("pb-2");
  });
});

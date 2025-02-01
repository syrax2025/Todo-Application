import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import React from "react";
import { Heading } from "../../ui";

describe("Heading Component", () => {
  test("should render the label text", () => {
    render(<Heading label="Welcome to the site" />);
    const headingElement = screen.getByText(/Welcome to the site/i);
    expect(headingElement).toBeInTheDocument();
  });

  test("should apply correct styles", () => {
    render(<Heading label="Welcome to the site" />);
    const headingElement = screen.getByText(/Welcome to the site/i);
    expect(headingElement).toHaveClass("font-bold");
    expect(headingElement).toHaveClass("text-4xl");
    expect(headingElement).toHaveClass("pt-6");
    expect(headingElement).toHaveClass("text-center");
  });
});

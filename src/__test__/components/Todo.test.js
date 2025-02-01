import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import Todo from "../../components/Todo";

describe("Todo Component", () => {
  test("renders the title and button", () => {
    render(<Todo title="Test Task" completed={false} buttonClick={() => {}} />);

    const titleElement = screen.getByText(/Test Task/i);
    expect(titleElement).toBeInTheDocument();

    const buttonElement = screen.getByRole("button", { name: /done/i });
    expect(buttonElement).toBeInTheDocument();
  });

  test("renders line-through and gray text when task is completed", () => {
    render(<Todo title="Test Task" completed={true} buttonClick={() => {}} />);

    const todoElement = screen.getByText(/Test Task/i);
    expect(todoElement).toHaveClass("line-through");
  });

  test("does not render line-through when task is not completed", () => {
    render(<Todo title="Test Task" completed={false} buttonClick={() => {}} />);

    const todoElement = screen.getByText(/Test Task/i);
    expect(todoElement).not.toHaveClass("line-through");
    expect(todoElement).not.toHaveClass("text-gray-500");
  });

  test("calls buttonClick when the 'Done' button is clicked", () => {
    const mockButtonClick = jest.fn();
    render(
      <Todo title="Test Task" completed={false} buttonClick={mockButtonClick} />
    );

    const buttonElement = screen.getByRole("button", { name: /done/i });
    fireEvent.click(buttonElement);

    expect(mockButtonClick).toHaveBeenCalledTimes(1);
  });
});

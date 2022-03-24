import { Submit } from "./Submit";
import { render, screen, fireEvent } from "@testing-library/react";

describe("Submit tests", () => {
  test("Button Clicked", () => {
    const onClick = jest.fn();
    render(<Submit variant="light" handleClick={onClick} />);
    const buttonElement = screen.getByText("Submit");
    fireEvent.click(buttonElement);
    expect(onClick).toHaveBeenCalledTimes(1);
  });
  test("Button unclicked", () => {
    const onClick = jest.fn();
    render(<Submit variant="light" handleClick={onClick} />);
    expect(onClick).toHaveBeenCalledTimes(0);
  });
});
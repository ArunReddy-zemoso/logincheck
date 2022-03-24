import { UserText } from "./UserText";
import { render, screen, fireEvent } from "@testing-library/react";

describe("Username tests", () => {
  test("Check Username", () => {
    const onChange = jest.fn();
    render(
      <UserText value="" handleChange={onChange} variant="light" />
    );
    const username = screen.getByPlaceholderText("username");
    expect(username).toHaveDisplayValue("");
  });
  test("Change Username", () => {
    const onChange = jest.fn();
    render(
      <UserText value="" handleChange={onChange} variant="light" />
    );
    const username = screen.getByPlaceholderText("username");
    fireEvent.change(username, { target: { value: "arun" } });
    expect(username).toHaveValue("arun");
  });
});
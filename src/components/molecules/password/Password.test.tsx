import { render, screen, fireEvent } from "@testing-library/react";
import { Password } from "./Password";

describe("Password tests", () => {
  test("Change Password", () => {
    const onChange = jest.fn();
    render(
      <Password value="" handleChange={onChange} variant="light" />
    );
    const passwordField = screen.getByPlaceholderText("password");
    expect(passwordField).toHaveDisplayValue("");
  });
  test("Check Password", () => {
    const onChange = jest.fn();
    render(
      <Password value="" handleChange={onChange} variant="light" />
    );
    const passwordField = screen.getByPlaceholderText("password");
    fireEvent.change(passwordField, { target: { value: "kumar" } });
    expect(passwordField).toHaveValue("kumar");
  });
});
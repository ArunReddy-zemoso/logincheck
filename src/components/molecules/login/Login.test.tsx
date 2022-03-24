import {Login} from './Login';
import {fireEvent,render,screen} from '@testing-library/react'

describe('Login test',()=>{
    const data = [
        {
          username: "arun",
          password: "kumar",
        },
        {
          username: "kumar",
          password: "reddy",
        },
      ];
      test("Before Click", () => {
        render(<Login AccountsData={data} variant="light" />);
        const containerElement = screen.getByRole("contentinfo");
        expect(containerElement).toHaveTextContent(
          "Enter your username and password"
        );
      });
      test("Empty Username and Password", () => {
        render(<Login AccountsData={data} variant="light" />);
        const buttonElement = screen.getByText("Submit");
        fireEvent.click(buttonElement);
        const containerElement = screen.getByRole("contentinfo");
        expect(containerElement).toHaveTextContent(
          "Please enter both Username and Password"
        );
      });
      test("Empty Username", () => {
        render(<Login AccountsData={data} variant="light" />);
        const PasswordField = screen.getByPlaceholderText("password");
        fireEvent.change(PasswordField, { target: { value: "12345" } });
        const containerElement = screen.getByRole("contentinfo");
        expect(containerElement).toHaveTextContent(
          "Click on Submit button if you finish entering your credentials"
        );
      });
      test("Submit Empty Username", () => {
        render(<Login AccountsData={data} variant="light" />);
        const PasswordField = screen.getByPlaceholderText("password");
        fireEvent.change(PasswordField, { target: { value: "12345" } });
        const buttonElement = screen.getByText("Submit");
        fireEvent.click(buttonElement);
        const containerElement = screen.getByRole("contentinfo");
        expect(containerElement).toHaveTextContent(
          "Please enter both Username and Password"
        );
      });
      test("Empty Password", () => {
        render(<Login AccountsData={data} variant="light" />);
        const UsernameField = screen.getByPlaceholderText("username");
        fireEvent.change(UsernameField, { target: { value: "sudhikshaMalla" } });
        const containerElement = screen.getByRole("contentinfo");
        expect(containerElement).toHaveTextContent(
          "Click on Submit button if you finish entering your credentials"
        );
      });
      test("Submit Empty Password", () => {
        render(<Login AccountsData={data} variant="light" />);
        const UsernameField = screen.getByPlaceholderText("username");
        fireEvent.change(UsernameField, { target: { value: "sudhikshaMalla" } });
        const buttonElement = screen.getByText("Submit");
        fireEvent.click(buttonElement);
        const containerElement = screen.getByRole("contentinfo");
        expect(containerElement).toHaveTextContent(
          "Please enter both Username and Password"
        );
      });
      test("Filled Credentials", () => {
        render(<Login AccountsData={data} variant="light" />);
        const UsernameField = screen.getByPlaceholderText("username");
        fireEvent.change(UsernameField, { target: { value: "sudhi7" } });
        const PasswordField = screen.getByPlaceholderText("password");
        fireEvent.change(PasswordField, { target: { value: "123456" } });
        const containerElement = screen.getByRole("contentinfo");
        expect(containerElement).toHaveTextContent(
          "Click on Submit button if you finish entering your credentials"
        );
      });
      test("Valid Credentials", () => {
        render(<Login AccountsData={data} variant="light" />);
        const UsernameField = screen.getByPlaceholderText("username");
        fireEvent.change(UsernameField, { target: { value: "arun" } });
        const PasswordField = screen.getByPlaceholderText("password");
        fireEvent.change(PasswordField, { target: { value: "kumar" } });
        const buttonElement = screen.getByText("Submit");
        fireEvent.click(buttonElement);
        const containerElement = screen.getByRole("contentinfo");
        expect(containerElement).toHaveTextContent("Valid Credentials");
      });
      test("Invalid Credentials", () => {
        render(<Login AccountsData={data} variant="light" />);
        const UsernameField = screen.getByPlaceholderText("username");
        fireEvent.change(UsernameField, { target: { value: "kumar" } });
        const PasswordField = screen.getByPlaceholderText("password");
        fireEvent.change(PasswordField, { target: { value: "redd" } });
        const buttonElement = screen.getByText("Submit");
        fireEvent.click(buttonElement);
        const containerElement = screen.getByRole("contentinfo");
        expect(containerElement).toHaveTextContent("Invalid Credentials");
      });
});
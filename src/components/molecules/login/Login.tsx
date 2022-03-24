import { Container } from "@material-ui/core";
import React from "react";
import { Password } from "../password/Password";
import { Submit } from "../submit/Submit";
import { UserText } from "../user/UserText";

type LoginBoxProps = {
  AccountsData: {
    username: string;
    password: string;
  }[];
  variant: "light" | "dark";
};

type StateProps = {
  credentials: {
    username: string;
    password: string;
  }[];
  input_username: string;
  input_password: string;
  message: string;
};

export class Login extends React.Component<LoginBoxProps, StateProps> {
  constructor(props: LoginBoxProps) {
    super(props);
    this.state = {
      credentials: props.AccountsData,
      input_username: "",
      input_password: "",
      message: "Enter your Credentials and click on submit",
    };
    this.handleUsernameChange = this.handleUsernameChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleUsernameChange(event: React.ChangeEvent<HTMLInputElement>) {
    this.setState({
      input_username: event.target.value,
      message: "Click on Submit button if you finish entering your credentials",
    });
  }

  handlePasswordChange(event: React.ChangeEvent<HTMLInputElement>) {
    this.setState({
      input_password: event.target.value,
      message: "Click on Submit button if you finish entering your credentials",
    });
  }

  handleClick() {
    let validation_message = "Invalid Credentials";
    this.state.credentials.forEach((credentials) => {
      if (
        this.state.input_username === "" ||
        this.state.input_password === ""
      ) {
        validation_message = "Please enter both Username and Password";
      } else if (
        credentials.username === this.state.input_username &&
        credentials.password === this.state.input_password
      ) {
        validation_message = "Valid Credentials";
      }
    });
    this.setState({
      message: validation_message,
    });
  }

  render() {
    const username = this.state.input_username;
    const password = this.state.input_password;
    return (
      <Container maxWidth="sm">
        <h2>LOGIN</h2>
        <UserText
          value={username}
          handleChange={this.handleUsernameChange}
          variant={this.props.variant}
        />
        <br></br>
        <Password
          variant={this.props.variant}
          value={password}
          handleChange={this.handlePasswordChange}
        />
        <br></br>
        <Submit
          variant={this.props.variant}
          handleClick={this.handleClick}
        />
        <p>
          {this.props.variant === "light" ? (
            <b role="contentinfo">{this.state.message}</b>
          ) : (
            <i role="contentinfo">{this.state.message}</i>
          )}
        </p>
      </Container>
    );
  }
}
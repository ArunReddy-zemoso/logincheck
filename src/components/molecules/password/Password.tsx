import { Typography } from "@material-ui/core";
import Input from "@material-ui/core/Input";
import { ReactEventHandler } from "react";
const ariaLabel = { "aria-label": "description" };

type PasswordProps = {
  value: string;
  handleChange: ReactEventHandler;
  variant: "light" | "dark";
};

export const Password = (props: PasswordProps) => {
  return (
    <div>
      <Input
        placeholder="Password"
        inputProps={ariaLabel}
        onChange={props.handleChange}
        type="password"
        style={{
          backgroundColor: props.variant === "light" ? "white" : "grey",
          border: props.variant === "light" ? "1px solid black":"1px solid skyblue",
        }}
      />
    </div>
  );
};
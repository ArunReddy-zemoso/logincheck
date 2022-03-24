import Input from "@material-ui/core/Input";

const ariaLabel = { "aria-label": "description" };

type UserTextProps = {
  value: string;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  variant: "light" | "dark";
};

export const UserText = (props: UserTextProps) => {
  return (
    <div>
      <Input
        placeholder="username"
        inputProps={ariaLabel}
        onChange={props.handleChange}
        style={{
          backgroundColor: props.variant === "light" ? "white" : "grey",
          border: props.variant === "light" ? "1px solid black":"1px solid skyblue",
          color: props.variant === "light" ? "black":'white',
        }}
      />
    </div>
  );
};
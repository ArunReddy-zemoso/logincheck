import Button from "@material-ui/core/Button";

export type SubmitProps = {
  handleClick: () => void;
  variant: "light" | "dark";
};

export const Submit = (props: SubmitProps) => {
  return (
    <div>
      <Button
        onClick={props.handleClick}
        style={{
          backgroundColor: props.variant === "light" ? "black" : "grey",
          color: props.variant === "dark" ? "black" : "white",
          borderRadius: props.variant === "light" ? 80 : 0,
        }}
      >
        Submit
      </Button>
    </div>
  );
};
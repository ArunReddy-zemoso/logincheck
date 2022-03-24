import { Password } from "./Password";

export default {
  title: "Password",
  component: Password,
  parameters: {
    actions: {
      handles: ["change"],
    },
  },
};

export const light = {
  args: {
    variant: "light",
  },
};

export const dark = {
  args: {
    variant: "dark",
  },
};
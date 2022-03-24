import { Submit } from "./Submit";

export default {
  title: "Submit",
  component: Submit,
  argTypes: { handleClick: { action: "clicked" } },
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
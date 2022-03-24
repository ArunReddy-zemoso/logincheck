import { UserText } from "./UserText";

export default {
  title: "UserText",
  component: UserText,
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
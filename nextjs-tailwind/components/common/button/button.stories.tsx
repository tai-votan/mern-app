import { Button, ButtonProps } from "./index";
import type { FC, PropsWithChildren } from "react";
import type { ComponentMeta, ComponentStory } from "@storybook/react";

const ButtonStory: ComponentStory<FC<PropsWithChildren<ButtonProps>>> = (props) => (
  <Button {...props}>{props.children}</Button>
);

export const ButtonControl = ButtonStory.bind({});

export default {
  title: "Button",
  component: Button,
  args: {
    children: "button",
  },
  argTypes: {
    type: {
      options: ["primary", "dashed", "link", "text", "default"],
      defaultValue: "default",
      control: "inline-radio",
    },
    style: {
      defaultValue: {},
      control: {
        type: "object",
      },
    },
    id: {
      defaultValue: "",
    },
    disabled: {
      options: [true, false],
      defaultValue: false,
      control: "boolean",
    },
    block: {
      options: [true, false],
      defaultValue: false,
      control: "boolean",
    },
    danger: {
      options: [true, false],
      defaultValue: false,
      control: "boolean",
    },
    htmlType: {
      options: ["button", "submit", "reset"],
      defaultValue: "button",
      control: "inline-radio",
    },
    className: {
      defaultValue: "",
    },
  },
} as ComponentMeta<typeof Button>;

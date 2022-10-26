import { Input, InputProps } from "./index";
import type { FC } from "react";

const InputStory: FC<InputProps> = (props) => <Input {...props} />;

export const InputControl = InputStory.bind({});

export default {
  title: "Input",
  component: Input,
  argTypes: {
    disabled: {
      options: [true, false],
      defaultValue: false,
    },
    id: {
      defaultValue: "",
    },
    value: {
      defaultValue: "",
    },
    style: {
      defaultValue: {},
      control: {
        type: "object",
      },
    },
    className: {
      defaultValue: "",
    },
    placeholder: {
      defaultValue: "",
    },
    maxLength: {
      defaultValue: "",
    },
    type: {
      options: [
        "button",
        "checkbox",
        "color",
        "date",
        "datetime-local",
        "email",
        "file",
        "hidden",
        "image",
        "month",
        "number",
        "password",
        "radio",
        "range",
        "reset",
        "search",
        "submit",
        "tel",
        "text",
        "time",
        "url",
        "week",
      ],
      control: "inline-radio",
      defaultValue: "text",
    },
  },
};

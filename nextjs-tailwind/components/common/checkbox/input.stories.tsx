import { Checkbox, CheckboxChangeEvent, CheckboxProps } from "./index";
import type { FC } from "react";
import { ComponentStory } from "@storybook/react";

const CheckboxStory: ComponentStory<FC<CheckboxProps>> = (props) => {
  const onChange = (event: CheckboxChangeEvent) => {
    console.log(`Func: onChange - PARAMS: event`, event);
  };

  return <Checkbox {...props} onChange={onChange} />;
};

export const InputControl = CheckboxStory.bind({});

InputControl.args = {
  children: "label",
};

export default {
  title: "Checkbox",
  component: Checkbox,
  argTypes: {
    disabled: {
      options: [true, false],
      defaultValue: false,
    },
    defaultChecked: {
      options: [true, false],
      defaultValue: false,
    },
    checked: {
      options: [true, false],
      defaultValue: false,
    },
    id: {
      defaultValue: "",
    },
    value: {
      defaultValue: "",
      control: { type: "string" },
    },
    name: {
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
  },
};

import Typography, { ParagraphProps, TextProps, TitleProps } from "./index";
import { FC, PropsWithChildren } from "react";
import { ComponentStory } from "@storybook/react";

export const TextControl: ComponentStory<FC<PropsWithChildren<TextProps>>> = (props) => {
  return <Typography.Text {...props}>{props.children}</Typography.Text>;
};

TextControl.args = {
  strong: false,
  italic: false,
};

export const ParagraphControl: ComponentStory<FC<PropsWithChildren<ParagraphProps>>> = (props) => {
  return <Typography.Paragraph {...props}>{props.children}</Typography.Paragraph>;
};

ParagraphControl.args = {
  strong: false,
  italic: false,
};

export const TitleControl: ComponentStory<FC<PropsWithChildren<TitleProps>>> = (props) => {
  return <Typography.Title {...props}>{props.children}</Typography.Title>;
};

TitleControl.args = {
  level: 1,
  italic: false,
};

TitleControl.argTypes = {
  level: {
    options: [1, 2, 3, 4, 5],
    control: { type: "inline-radio" },
    defaultValue: 1,
  },
};

export default {
  title: "Typography",
  component: Typography,
  args: {
    children:
      "In the process of internal desktop applications development, many different design specs and implementations would be involved, which might cause designers and developers difficulties and duplication and reduce the efficiency of development.",
  },
  argTypes: {
    style: {
      defaultValue: {},
      control: {
        type: "object",
      },
    },
    className: {
      defaultValue: "",
    },
    id: {
      defaultValue: "",
      control: "string",
    },
  },
};

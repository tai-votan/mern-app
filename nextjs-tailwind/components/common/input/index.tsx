import React, { ChangeEvent, HTMLInputTypeAttribute } from "react";
import classNames from "classnames";

export interface InputProps {
  disabled?: boolean;
  id?: string;
  value?: string;
  style?: React.CSSProperties;
  maxLength?: number;
  className?: string;
  placeholder?: string;
  type?: HTMLInputTypeAttribute;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
}

export const Input = (props: InputProps) => {
  const { type, className, ...inputProps } = props;
  return (
    <input
      type={type}
      className={classNames("border outline-0 px-2 py-1.5 rounded", className, {
        "cursor-not-allowed": props.disabled,
        "w-full": ["number", "password", "text"].includes(type as string),
        "cursor-pointer": !["number", "password", "text"].includes(type as string),
      })}
      {...inputProps}
    />
  );
};

Input.defaultProps = {
  disabled: false,
  type: "text",
};

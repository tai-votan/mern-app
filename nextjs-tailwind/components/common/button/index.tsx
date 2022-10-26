import React, { FC, MouseEvent, PropsWithChildren } from "react";
import classNames from "classnames";

export interface ButtonProps {
  disabled?: boolean;
  id?: string;
  style?: React.CSSProperties;
  block?: boolean;
  danger?: boolean;
  className?: string;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
  type?: "primary" | "dashed" | "link" | "text" | "default";
  htmlType?: "button" | "submit" | "reset" | undefined;
}

export const Button: FC<PropsWithChildren<ButtonProps>> = (props) => {
  const { block, danger, children, className, htmlType, disabled, type, ...buttonProps } = props;

  const isPrimary = ["primary"].includes(type as string);
  const isDashed = ["dashed"].includes(type as string);
  const isDefaultOrDashed = ["default", "dashed"].includes(type as string);
  const isLink = ["link"].includes(type as string);
  const isTextOrLink = ["text", "link"].includes(type as string);

  const unlessDangerAndDisabled = !danger && !disabled;
  const IsDangerAndDisabled = danger && !disabled;

  return (
    <button
      type={htmlType}
      disabled={disabled}
      className={classNames("px-6 py-1.5 border rounded transition-all duration-300 hover:opacity-80", className, {
        "w-full": block,
        "disabled:text-slate-400 cursor-not-allowed": disabled,

        // primary button
        "text-white": isPrimary && !disabled,
        "border-orange-400 bg-orange-400": isPrimary && unlessDangerAndDisabled,
        "bg-rose-600 border-rose-600": isPrimary && IsDangerAndDisabled,

        // dashed button
        "bg-white": isDefaultOrDashed,
        "border-dashed": isDashed,
        "text-rose-600 border-rose-600": isDefaultOrDashed && IsDangerAndDisabled,
        "hover:text-orange-400 hover:border-orange-400": isDefaultOrDashed && unlessDangerAndDisabled,

        // text/link button
        "border-transparent": isTextOrLink,
        "text-sky-600": isLink && unlessDangerAndDisabled,
        "text-rose-600": isTextOrLink && IsDangerAndDisabled,
        "disabled:bg-slate-100 disabled:border-slate-200": disabled && !isTextOrLink,
      })}
      {...buttonProps}
    >
      {children}
    </button>
  );
};

Button.defaultProps = {
  disabled: false,
  block: false,
  danger: false,
  type: "default",
  htmlType: "button",
};

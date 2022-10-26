import React, { useState } from "react";
import classNames from "classnames";

export interface CheckboxChangeEventTarget extends CheckboxProps {
  checked: boolean;
}

export interface CheckboxChangeEvent {
  target: CheckboxChangeEventTarget;
  stopPropagation: () => void;
  preventDefault: () => void;
  nativeEvent: MouseEvent;
}

export interface CheckboxProps {
  className?: string;
  defaultChecked?: boolean;
  checked?: boolean;
  style?: React.CSSProperties;
  disabled?: boolean;
  onChange?: (e: CheckboxChangeEvent) => void;
  onClick?: (e: React.MouseEvent<HTMLInputElement>) => void;
  value?: string;
  name?: string;
  children?: React.ReactNode;
  id?: string;
}

export const Checkbox: React.ForwardRefRenderFunction<HTMLInputElement, CheckboxProps> = (props) => {
  const { children, className, defaultChecked, disabled, onChange, ...restProps } = props;
  const [checked, setChecked] = useState<boolean>(props.checked || defaultChecked || false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (disabled) {
      return;
    }
    if (!("checked" in props)) {
      setChecked(e.target.checked);
    }
    if (onChange) {
      onChange({
        target: {
          ...props,
          checked: e.target.checked,
        },
        stopPropagation() {
          e.stopPropagation();
        },
        preventDefault() {
          e.preventDefault();
        },
        nativeEvent: e.nativeEvent,
      });
    }
  };

  return (
    <label className="flex items-center">
      <input
        disabled={disabled}
        type="checkbox"
        checked={checked || defaultChecked}
        className={classNames("border outline-0 px-2 py-1.5 rounded cursor-pointer", className, {
          "cursor-not-allowed": disabled,
        })}
        onChange={(e) => handleChange(e)}
        {...restProps}
      />
      {children !== undefined && <span className="px-1.5">{children}</span>}
    </label>
  );
};

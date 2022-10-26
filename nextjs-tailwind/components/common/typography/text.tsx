import classNames from "classnames";
import { FC, PropsWithChildren } from "react";
import { TextProps } from "./index";

export const Text: FC<PropsWithChildren<TextProps>> = (props) => {
  const { strong, italic, children, className, ...restProps } = props;

  return (
    <span className={classNames(className, { "font-semibold": strong, italic })} {...restProps}>
      {children}
    </span>
  );
};

Text.defaultProps = {
  strong: false,
  italic: false,
};

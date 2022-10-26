import classNames from "classnames";
import React, { FC, PropsWithChildren } from "react";
import { TitleProps } from "./index";

export const Title: FC<PropsWithChildren<TitleProps>> = (props) => {
  const { level, className, italic, children, ...restProps } = props;
  const Component = `h${level}` as any;

  return (
    <Component className={classNames(className, { italic })} {...restProps}>
      {children}
    </Component>
  );
};

Title.defaultProps = {
  level: 1,
  italic: false,
};

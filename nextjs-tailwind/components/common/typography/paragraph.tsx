import classNames from "classnames";
import { FC, PropsWithChildren } from "react";
import { ParagraphProps } from "./index";

export const Paragraph: FC<PropsWithChildren<ParagraphProps>> = (props) => {
  const { strong, italic, children, className, ...restProps } = props;

  return (
    <p className={classNames(className, { "font-semibold": strong, italic })} {...restProps}>
      {children}
    </p>
  );
};

Paragraph.defaultProps = {
  strong: false,
  italic: false,
};

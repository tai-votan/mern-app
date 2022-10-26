import React from "react";
import { Text } from "./text";
import { Paragraph } from "./paragraph";
import { Title } from "./title";

interface TypographyProps {
  id?: string;
  style?: React.CSSProperties;
  ["aria-label"]?: string;
  className?: string;
  italic?: boolean;
  onClick?: (e?: React.MouseEvent<HTMLDivElement>) => void;
}

export interface TextProps extends TypographyProps {
  strong?: boolean;
  onClick?: (e?: React.MouseEvent<HTMLElement>) => void;
}

export interface TitleProps extends TypographyProps {
  level?: 1 | 2 | 3 | 4 | 5;
}

export interface ParagraphProps extends TypographyProps {
  strong?: boolean;
}

export default {
  Text,
  Paragraph,
  Title,
};

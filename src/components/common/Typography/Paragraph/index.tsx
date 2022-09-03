import { ParagraphComponent } from "./Paragraph.styles";
import { TypographyProps } from "../types";

export function Paragraph({ children, className }: TypographyProps) {
  return (
    <ParagraphComponent className={className}>{children}</ParagraphComponent>
  );
}

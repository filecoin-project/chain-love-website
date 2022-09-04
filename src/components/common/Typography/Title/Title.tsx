import { TypographyProps } from '../types';
import { H1Component, H3Component, H6Component } from "./Title.styles";

interface TitleProps extends TypographyProps  {
  children: React.ReactNode;
  className?: string;
  type?: 'h1' | 'h3' | 'h6';
};


export function Title({ children, className, type }: TitleProps) {
  const renderTitle = () => {
    switch(type){
      case 'h3':
        return <H3Component className={className}>{children}</H3Component>;

      case 'h6':
        return <H6Component className={className}>{children}</H6Component>;

      default:
        return <H1Component className={className}>{children}</H1Component>;
    }
  }

  return renderTitle();
}

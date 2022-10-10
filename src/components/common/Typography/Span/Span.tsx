import { SpanComponent } from './Span.styles';
import { TypographyProps } from '../types';

export function Span({ children, className }: TypographyProps) {
	return <SpanComponent className={className}>{children}</SpanComponent>;
}

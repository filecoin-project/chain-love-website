import { SpanComponent } from './Span.styles';
import { TypographyProps } from '../types';

export function Span({ children, className, onClick, title }: TypographyProps) {
	return (
		<SpanComponent title={title} className={className} onClick={onClick}>
			{children}
		</SpanComponent>
	);
}

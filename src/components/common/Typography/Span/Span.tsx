import { SpanComponent } from './Span.styles';
import { TypographyProps } from '../types';

export function Span({ children, className, onClick }: TypographyProps) {
	return (
		<SpanComponent className={className} onClick={onClick}>
			{children}
		</SpanComponent>
	);
}

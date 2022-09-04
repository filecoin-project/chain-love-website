import { StyledLine } from './HorizontalLine.styles';

export function HorizontalLine({
	opacity,
	weight,
}: {
	weight?: string;
	opacity?: number;
}) {
	return <StyledLine opacity={opacity} weight={weight} />;
}

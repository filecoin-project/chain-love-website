import { StyledButton } from './Button.styles';

export function Button({
	children,
	disabled,
	onClick,
}: {
	disabled: boolean;
	children: string;
	onClick: () => void;
}) {
	return (
		<StyledButton disabled={disabled} onClick={onClick}>
			{children}
		</StyledButton>
	);
}

import { StyledButton } from './Button.styles';

export function Button({
	children,
	disabled,
	onClick,
	type,
}: {
	disabled: boolean;
	children: string;
	onClick: () => void;
	type?: any;
}) {
	return (
		<StyledButton type={type} disabled={disabled} onClick={onClick}>
			{children}
		</StyledButton>
	);
}

import styled from 'styled-components';

export const StyledButton = styled.button<{ disabled: boolean }>`
	background-color: ${({
		theme: {
			colors: { secondary },
		},
	}) => secondary};
	border-radius: 8px;
	padding: 8px;
	min-width: 4rem;
	font-weight: bold;
	box-sizing: border-box;
	max-width: 8rem;
	cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
	pointer-events: ${({ disabled }) => (disabled ? 'none' : 'all')};
	&:active {
		padding: 6px;
		margin: 2px;
		font-weight: lighter;
	}

	&:hover {
		background-color: ${({
			theme: {
				colors: { secondary },
			},
		}) => `${secondary}aa`};
	}
`;

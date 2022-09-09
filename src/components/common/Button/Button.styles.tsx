import styled from 'styled-components';

export const ButtonComponent = styled.button`
	background-color: ${({
		theme: {
			colors: { secondary },
		},
	}) => secondary};
	border-radius: 8px;
	margin-bottom: 6%;
	padding: 6px;
	width: 20%;
	align-self: end;
`;

import styled from 'styled-components';

export const StyledPre = styled.pre`
	margin: 8px 0px;
	box-sizing: border-box;
	padding: 8px;
	background-color: ${({
		theme: {
			colors: {
				background: { code },
			},
		},
	}) => code};
	word-wrap: break-word;
`;

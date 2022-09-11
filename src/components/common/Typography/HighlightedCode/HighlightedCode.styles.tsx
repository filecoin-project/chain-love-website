import styled from 'styled-components';

export const StyledPre = styled.pre`
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
	overflow: auto;
	code {
		word-wrap: wrap;
	}
`;

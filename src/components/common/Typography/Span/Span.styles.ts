import styled from 'styled-components';

export const SpanComponent = styled.span`
	line-height: 20px;
	color: ${({
		theme: {
			colors: { font },
		},
	}) => font};
`;

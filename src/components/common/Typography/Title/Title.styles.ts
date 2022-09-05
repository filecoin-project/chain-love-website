import styled from 'styled-components';

export const H1Component = styled.h1`
	font-size: 2.6rem;
	font-weight: 500;
	line-height: 72px;
	color: ${({ theme: { colors: { font } } }) => font};
`;

export const H3Component = styled.h3`
	font-size: 2rem;
	font-weight: 500;
	line-height: 56px;
	color: ${({ theme: { colors: { font } } }) => font};
`;

export const H6Component = styled.h6`
	font-size: 1.2rem;
	font-weight: 500;
	line-height: 40px;
	color: ${({ theme: { colors: { font } } }) => font};
`;

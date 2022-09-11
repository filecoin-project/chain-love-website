import styled from 'styled-components';
import { Span } from '../common/Typography/Span/Span';
import { Title } from '../common/Typography/Title/Title';

export const Container = styled.div`
	width: 100%;
	box-sizing: border-box;
	padding-left: 24px;
	max-width: 80rem;
`;

export const Content = styled(Container)`
	padding: 0px;
	border: none;
`;

export const Description = styled(Span)`
	margin-bottom: 12px;
	display: block;
`;
export const Method = styled(Title)`
	font-family: ${({
		theme: {
			fonts: { code },
		},
	}) => code};
`;

export const StyledCode = styled.code`
	color: ${({ theme: { colors } }) => colors.accent};
	background-color: #f9f9f9;
	box-shadow: inset 0 0 0 1px #e8e8e8;
	font-size: inherit;
	line-height: 1.2;
	padding: 0.15em 0.4em;
	border-radius: 4px;
	display: inline-block;
	white-space: pre-wrap;
`;

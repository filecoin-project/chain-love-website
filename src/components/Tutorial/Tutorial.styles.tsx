import styled from 'styled-components';
import { Span } from '../common/Typography/Span/Span';

export const MainContainer = styled.div`
	width: 80%;
	min-width: 80%;
	overflow-y: scroll;
	padding: 24px;
`;

export const Container = styled.div`
	width: 100%;
	box-sizing: border-box;
	padding: 24px;
`;

export const Description = styled(Span)`
	margin-bottom: 12px;
	display: block;
`;

export const Image = styled.img``;

export const Link = styled.a`
	margin: 0 5px;
	color: ${({
		theme: {
			colors: { font },
		},
	}) => font};
	&:hover {
		color: ${({
			theme: {
				colors: { primary },
			},
		}) => primary};
	}
`;

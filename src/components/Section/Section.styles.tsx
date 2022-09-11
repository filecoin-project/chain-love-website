import styled from 'styled-components';
import { Span } from '../common/Typography/Span/Span';
import { Title } from '../common/Typography/Title/Title';

export const SectionContainer = styled.div`
	display: flex;
	width: 100%;
	min-width: 40%;
	overflow-y: scroll;
	flex-direction: column;
	gap: 12px;
	box-sizing: border-box;
	padding: 24px;
`;

export const Heading = styled(Title)``;
export const Description = styled(Span)`
	box-sizing: border-box;
	display: flex;
	margin: 24px;
	font-size: 16px;
	font-weight: lighter;
	color: ${({
		theme: {
			colors: { font },
		},
	}) => font};
`;
export const ServiceContainer = styled.div``;

export const ServiceWrapper = styled.div`
	display: flex;

	@media screen and (max-width: ${({theme: {breakPoints: {large}}}) => large}) {
    flex-direction: column;
		margin-bottom: 30px;

		:last-child{
			margin-bottom: 0px;
		}
  }
`;

export const PlaygroundTitleContainer = styled.div`
	margin-top: 20px;
	display: none;
	
	@media screen and (max-width: ${({theme: {breakPoints: {large}}}) => large}) {
		display: block;
	}
`

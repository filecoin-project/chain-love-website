import styled from 'styled-components';
import { Title } from '../common/Typography/Title/Title';

export const SectionContainer = styled.div`
	display: flex;
	width: 80%;
	min-width: 80%;
	overflow-y: scroll;
	flex-direction: column;
	gap: 12px;
	box-sizing: border-box;
	padding: 24px;
`;

export const Heading = styled(Title)``;
export const Description = styled.span`
	box-sizing: border-box;
	display: flex;
	margin: 24px;
	font-size: 16px;
	font-weight: lighter;
	color: ${({
		theme: {
			colors: { font },
		},
	}) => font.med};
`;
export const ServiceContainer = styled.div``;

import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Title } from '../../common/Typography/Title/Title';

export const Container = styled.div`
	width: 100%;
	height: 100%;
	overflow-y: auto;
	max-width: 270px;
	background-color: ${({
		theme: {
			colors: { lightGray },
		},
	}) => lightGray};
`;

export const SectionTitleContainer = styled.div`
	padding: 23px 0px 23px 23px;
	border-bottom: 1px solid rgba(148, 151, 155, 0.2);
	display: flex;
	flex-direction: column;
	gap: 8px;
`;

export const SectionTitle: any = styled(Title).attrs({ as: Link })<{
	active: boolean;
}>`
	font-size: 22px;
	line-height: 30px;
	cursor: ${({ active }) => (active ? 'default' : 'pointer')};
	color: ${({ theme: { colors }, active }) =>
		active ? colors.primary : 'black'};
	text-decoration: none;
	&: {
		color: ${({ theme: { colors } }) => colors.primary};
	}
`;

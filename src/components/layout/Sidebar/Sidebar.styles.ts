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
			colors: {
				background: { sidebar },
			},
		},
	}) => sidebar};
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
	subtitle: boolean;
}>`
	font-size: ${({ subtitle }) => (subtitle ? '20px' : '22px')};
	margin: ${({ subtitle }) => (subtitle ? '0 5px 0 0' : '10px 0 10px 0')};

	line-height: 30px;
	cursor: ${({ active }) => (active ? 'default' : 'pointer')};
	color: ${({
		theme: {
			colors: { primary, font },
		},
		active,
	}) => (active ? primary : font)};
	text-decoration: none;
	&: {
		color: ${({ theme: { colors } }) => colors.primary};
	}
`;

export const ServiceTitle: any = styled(Title).attrs({ as: Link })<{
	active: boolean;
}>`
	line-height: 30px;
	margin-left: 10px;
	cursor: ${({ active }) => (active ? 'default' : 'pointer')};
	color: ${({
		theme: {
			colors: { primary, font },
		},
		active,
	}) => (active ? primary : font)};
	text-decoration: none;
	&: {
		color: ${({ theme: { colors } }) => colors.primary};
	}
`;

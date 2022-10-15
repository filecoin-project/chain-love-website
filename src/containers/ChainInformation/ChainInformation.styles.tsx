import styled from 'styled-components';
import { Span } from '../../components/common/Typography/Span/Span';

export const Container = styled.div`
	width: 100%;
	padding: 20px;
	height: 500px;
`;

export const List = styled.ul<{ column?: boolean; mobile?: boolean }>`
	min-height: 30px;
	width: 100%;
	display: flex;
	align-items: center;
	list-style-type: none;
	border-bottom: 1px solid rgba(148, 151, 155, 0.2);
	padding: 10px 0px;

	${({ column }) =>
		column &&
		`
    flex-direction: column;
    border-bottom: none;
    margin-bottom: 0px;
    padding: 0px;
  `}

	${({ mobile }) =>
		mobile &&
		`
    justify-content: space-between;
  `}
`;

export const ListItem = styled.li<{ fullWidth?: boolean }>`
	width: 20%;
	text-decoration: none;
	display: flex;

	${({ fullWidth }) =>
		fullWidth &&
		`
    width: 100%;
  `}
`;

export const Heading = styled(Span)`
	font-size: 20px;
	color: ${({
		theme: {
			colors: { primary },
		},
	}) => primary};
`;

export const ModalContainer = styled.div`
	width: 100%;
`;

export const Cell = styled(Span)<{
	empty?: boolean;
	mobile?: boolean;
	cursor?: boolean;
}>`
	font-size: 20px;
	width: 25%;
	display: inline-block;

	${({ empty }) =>
		empty &&
		`
    text-align: center;
  `};

	${({ cursor }) =>
		cursor &&
		`
    cursor: pointer;
  `};

	${({ mobile }) =>
		mobile &&
		`
    width: 50%;
  `}
`;

export const NotificationItem = styled.li`
	width: 100%;
	text-decoration: none;
	display: flex;
	margin-bottom: 15px;
	border-bottom: 1px solid rgba(148, 151, 155, 0.2);
	padding: 10px 0px;
`;

export const BlockHeight = styled.div<{ mobile?: boolean }>`
	width: 25%;
	display: flex;
	align-items: center;

	${({ mobile }) =>
		mobile &&
		`
    width: 50%;
  `}
`;

export const BlockData = styled.div`
	width: 100%;
`;

export const BlockInformation = styled.div`
	width: 100%;
	margin-bottom: 10px;

	:last-child {
		margin-bottom: 0px;
	}
`;

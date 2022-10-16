import styled from 'styled-components';

export const ModalOverlay = styled.div<{ isOpen: boolean }>`
	display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
	position: fixed;
	z-index: 1;
	left: 0;
	top: 0;
	height: 100%;
	width: 100%;
	overflow: auto;
	background-color: rgba(0, 0, 0, 0.5);
`;

export const ModalListItem = styled.li<{ fullWidth?: boolean }>`
	width: 100%;
	text-decoration: none;
	display: flex;
	justify-content: space-between;

	margin-bottom: 15px;
	border-bottom: 1px solid rgba(148, 151, 155, 0.2);
	padding: 10px 0px;
	${({ fullWidth }) =>
		fullWidth &&
		`
    width: 100%;
  `}
`;
export const ModalContainer = styled.div`
	position: relative;
	box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.5);
	transition: background 0.3s, border 0.3s, border-radius 0.3s, box-shadow 0.3s;
	padding: 0px 26px 0px 26px;
	background-color: ${({
		theme: {
			colors: {
				background: { sidebar },
			},
		},
	}) => sidebar};
	margin: 20% auto;
	width: 900px;
	height: 400px;
	display: flex;
	flex-direction: column;
	box-sizing: border-box;
	align-items: center;
	gap: 32px;
	overflow-y: auto;
`;
export const ModalHeader = styled.div`
	display: flex;
	flex-direction: column;
	padding: 10px;
	position: sticky;
	background-color: ${({
		theme: {
			colors: {
				background: { sidebar },
			},
		},
	}) => sidebar};
`;
export const ModalClose = styled.span`
	font-size: 30px;
	line-height: 36px;
	color: #c3c3c3;
	float: right;
	align-self: end;
	text-align: end;
	cursor: pointer;
`;
export const ModalTitle = styled.span`
	margin-bottom: 4px;
	text-align: center;
	font-size: 1.5rem;
	color: ${({
		theme: {
			colors: { accent },
		},
	}) => accent};
`;
export const ModalContent = styled.div`
	display: flex;
	align-items: flex-end;
	width: 80%;
`;

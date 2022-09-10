import styled from 'styled-components';

export const PlaygroundContainer = styled.div`
	width: 40%;
	padding-top: 6%;
	display: flex;
	flex-direction: column;
	align-self: start;

	.styled-monaco-editor {
		margin-bottom: 12px;
		box-sizing: border-box;
		[role='code'] {
			padding: 6px 0px;
		}
	}
`;

export const ButtonContainer = styled.div`
	box-sizing: border-box;
	padding: 6px;
	width: 100%;
	display: flex;
	justify-content: end;
`;

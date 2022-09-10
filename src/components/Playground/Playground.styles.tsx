import styled from 'styled-components';

export const PlaygroundContainer = styled.div`
	width: 55%;
	display: flex;
	flex-direction: column;
	align-self: start;
	padding-left: 20px;

	.styled-monaco-editor {
		margin-bottom: 12px;
		box-sizing: border-box;
		[role='code'] {
			padding: 6px 0px;
			background-color: ${({theme: {colors: {background: { code }}}}) => code};
		}
		.margin-view-overlays, .monaco-editor-background{
			background-color: ${({theme: {colors: {background: { code }}}}) => code};
		}

		.decorationsOverviewRuler{
			display: none !important;
		}
	}

	@media screen and (max-width: ${({theme: {breakPoints: {large}}}) => large}) {
		width: 100%;
  }
`;

export const TitleContainer = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: space-between;
`

export const ButtonContainer = styled.div`
	box-sizing: border-box;
	padding: 6px;
	width: 100%;
	display: flex;
	justify-content: end;
`;

export const EditorsContainer = styled.div`
`

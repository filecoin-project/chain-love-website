import styled from 'styled-components';

export const MainContainer = styled.div`
	width: 80%;
	min-width: 80%;
	overflow-y: scroll;
	padding: 24px;
	@media screen and (max-width: ${({
			theme: {
				breakPoints: { small },
			},
		}) => small}) {
		width: 100%;
	}
`;

export const Container = styled.div`
	width: 100%;
	box-sizing: border-box;
	padding: 24px;

	@media screen and (max-width: ${({
			theme: {
				breakPoints: { small },
			},
		}) => small}) {
		padding: 12px;
	}
`;

export const InputContainer = styled.div`
	width: 40%;
	box-sizing: border-box;
	padding: 24px 0;

	@media screen and (max-width: ${({
			theme: {
				breakPoints: { small },
			},
		}) => small}) {
		width: 100%;
	}
`;

export const Form = styled.form``;

export const Input = styled.input`
	padding: 6px 12px;
	background-color: ${({
		theme: {
			colors: {
				background: { sidebar },
			},
		},
	}) => sidebar};
	border: 1px solid rgb(60, 63, 68);
	border-radius: 4px;
	font-size: 13px;
	color: rgb(247, 248, 248);
	height: 40px;
	appearance: none;
	transition: border 0.15s ease 0s;
	margin-right: 20px;
	:focus {
		outline: none;
		box-shadow: none;
		border-color: rgb(100, 153, 255);
	}
`;

export const SummaryContainer = styled.div`
	padding: 30px 32px;
	width: 100%;
	min-height: 13vh;
	border-radius: 16px;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: start;
	background-color: ${({
		theme: {
			colors: {
				background: { sidebar },
			},
		},
	}) => sidebar};
	@media screen and (max-width: ${({
			theme: {
				breakPoints: { small },
			},
		}) => small}) {
		width: 100%;
		padding: 30px 12px;
	}
`;

export const SummaryTitleContainer = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
`;

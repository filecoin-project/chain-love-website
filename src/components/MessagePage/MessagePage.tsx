import { useState } from 'react';
import { ChainLoveAPI } from '../../api/chain.love';
import { Button } from '../common/Button/Button';
import { HorizontalLine } from '../common/HorizontalLine/HorizontalLine';
import { Span } from '../common/Typography/Span/Span';
import { Title } from '../common/Typography/Title/Title';
import {
	Container,
	Form,
	Input,
	InputContainer,
	MainContainer,
	SummaryContainer,
	SummaryTitleContainer,
} from './MessagePage.styles';

export function MessagePage() {
	const [loading, setLoading] = useState(false);
	const [inputMessage, setInputMessage] = useState('');
	const [currentMessage, setCurrentMessage] = useState('');
	const [res, setRes]: any = useState();

	const handleChange = (e: any) => {
		setInputMessage(e.target.value);
	};

	const handleSubmit = (e: any) => {
		e.preventDefault();
		setCurrentMessage(inputMessage);
		setLoading(true);
		ChainLoveAPI.callMethod('ChainGetMessage', [{ '/': inputMessage }]).then(
			(data) => {
				setLoading(false);
				setRes(data);
			},
		);
	};

	return (
		<MainContainer>
			<Title>Get Message information (ChainGetMessage)</Title>
			<HorizontalLine />

			<Container>
				<Form onSubmit={handleSubmit}>
					<InputContainer>
						<Input placeholder="Message" onChange={(e) => handleChange(e)} />
						<Button disabled={false} onClick={() => {}}>
							Search
						</Button>
					</InputContainer>
				</Form>
				{res && (
					<SummaryContainer>
						<SummaryTitleContainer>
							<Span>Message: {currentMessage}</Span>
							<HorizontalLine />
						</SummaryTitleContainer>

						{!res.result && loading ? (
							`loading...`
						) : res.error ? (
							<Span>`Error: ${res.error.message}`</Span>
						) : (
							res.result && (
								<>
									<Span>From: {res.result.From}</Span>
									<Span>To: {res.result.To}</Span>
									<Span>Method: {res.result.Method}</Span>
									<Span>Value: {res.result.Value}</Span>
									<Span>GasLimit: {res.result.GasLimit}</Span>
								</>
							)
						)}
					</SummaryContainer>
				)}
			</Container>
		</MainContainer>
	);
}

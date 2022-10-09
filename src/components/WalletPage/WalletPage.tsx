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
} from './WalletPage.styles';

export function WalletPage() {
	const [loading, setLoading] = useState(false);
	const [inputWallet, setInputWallet] = useState('');
	const [currentWallet, setCurrentWallet] = useState('');
	const [res, setRes]: any = useState();

	const handleChange = (e: any) => {
		setInputWallet(e.target.value);
	};

	const handleSubmit = (e: any) => {
		e.preventDefault();
		setCurrentWallet(inputWallet);
		setLoading(true);
		ChainLoveAPI.callMethod('WalletBalance', [inputWallet]).then((data) => {
			setLoading(false);
			setRes(data);
		});
	};

	return (
		<MainContainer>
			<Title>Get Wallet information (WalletBalance)</Title>
			<HorizontalLine />

			<Container>
				<Form onSubmit={handleSubmit}>
					<InputContainer>
						<Input
							placeholder="Wallet address"
							onChange={(e) => handleChange(e)}
						/>
						<Button disabled={false} onClick={() => {}}>
							Search
						</Button>
					</InputContainer>
				</Form>
				{res && (
					<SummaryContainer>
						<SummaryTitleContainer>
							<Span>Wallet: {currentWallet}</Span>
							<HorizontalLine />
						</SummaryTitleContainer>
						<Span>
							Balance:{' '}
							{!res.result && loading
								? `loading...`
								: res.result && `${res.result} FIL`}{' '}
						</Span>
					</SummaryContainer>
				)}
			</Container>
		</MainContainer>
	);
}

import { HorizontalLine } from '../common/HorizontalLine/HorizontalLine';
import { HighlightedCode } from '../common/Typography/HighlightedCode/HighlightedCode';
import { Title } from '../common/Typography/Title/Title';
import {
	MainContainer,
	Container,
	Description,
	Link,
	Image,
} from './Tutorial.styles';
import LiteNodeDiagram from '../../assets/lite-node-diagram.png';

export function Tutorial() {
	return (
		<MainContainer>
			<Title>Chain.Love</Title>
			<HorizontalLine />
			<Container>
				<Description>
					chain.love is a free lotus API operated by Protocol Labs. This service
					is one of the many ways available to interact with the filecoin
					blockchain. The backend of this service is a limited subset of the
					full lotus API — specifically, a lotus “gateway” service. Users of
					this service are able to make queries against the filecoin blockchain
					to anylize previous messgaes. Users can also submit messages through
					this service and they will be included on the filecoin blockchain.
				</Description>
			</Container>
			<Title>Acquiring filecoin</Title>
			<HorizontalLine />
			<Container>
				<Description>
					Instructions for installing filecoin can be found at
					<Link href="https://lotus.filecoin.io/" target="_blank">
						https://lotus.filecoin.io/
					</Link>
				</Description>
			</Container>
			<Title>What are light nodes?</Title>
			<HorizontalLine />
			<Container>
				<Description>
					When using filecoin, a “lite” node refers to any filecoin node that
					doesn’t itself participate in the blockchain. Such nodes may have
					their own wallets and signing capabilities and are capable of
					executing filecoin deals with storage providers, but they do not able
					to independently validate messages or participate in consensus.
					Instead, lite nodes will submit messages to another node that can
					handle the message on its behalf.
				</Description>
				<Image src={LiteNodeDiagram} alt="diagram" />
				<Description>
					Any lotus node with an up-to-date blockchain can act as the backend of
					a lotus lite node and we encourage everyone to run their own lotus
					daemons whenever possible. For applications where running a full lotus
					node is unreasonable, a gateway service such as this one is a
					convenient alternative.
				</Description>
			</Container>
			<Title>Using Chain Love (or any other gateway service) with lotus</Title>
			<HorizontalLine />
			<Container>
				<Description>
					The lotus has a special -lite mode that can be activated by passing
					--lite on the command line. When this flag is enabled, lotus will look
					to the environment varable FULLNODE_API_INFO and will use this address
					as the backend.
				</Description>
				<Description>
					The local “lite” daemon will look and behave the same as a local full
					node. It will listen on the same TCP sockets, and accept the same
					commands. It will output messages to the console that look almost
					identicial, but with only a few key differences
				</Description>
				<Description>
					Let’s see how it looks to use api.chain.love with a lotus daemon
					running with the lite flag.
				</Description>
				<HighlightedCode>
					export FULLNODE_API_INFO=/dns/api.chain.love/wss
				</HighlightedCode>
				<HighlightedCode>lotus daemon --lite</HighlightedCode>
				<Description>Woah Woah Woah, that’s it?</Description>
				<Description>Yep. That’s it.</Description>
			</Container>
			<Title>Where do I go from here?</Title>
			<HorizontalLine />
			<Container>
				<Description>
					How about{' '}
					<Link
						href="https://lotus.filecoin.io/tutorials/lotus/store-and-retrieve/store-data"
						target="_blank"
					>
						making a deal
					</Link>
					?
				</Description>
			</Container>
		</MainContainer>
	);
}

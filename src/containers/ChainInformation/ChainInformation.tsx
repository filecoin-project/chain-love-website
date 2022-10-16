import { useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Modal } from '../../components/common/Modal/Modal';
import { ModalListItem } from '../../components/common/Modal/Modal.styles';
import { Sidebar } from '../../components/layout/Sidebar/Sidebar';
import { Wrapper } from '../../components/layout/Wrapper';
import { useChainNotifications } from '../../hooks/useChainNotifications';
import { useMobileDetect } from '../../hooks/useMobileDetect';
import { groupBy } from '../../utils/groupBy';
import { shortenString } from '../../utils/shortenString';
import {
	Container,
	Heading,
	ListItem,
	List,
	Cell,
	NotificationItem,
	BlockInformation,
	BlockHeight,
	BlockData,
	ModalContainer,
} from './ChainInformation.styles';
import { chainHeadings } from './constant';

export function ChainInformation() {
	const navigate = useNavigate();
	const notifications = useChainNotifications();
	const mobileView = useMobileDetect();
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [selectedBlock, setSelectedBlock]: any = useState({});

	const formattedNotifications = useMemo(() => {
		console.log({ notifications });
		if (notifications.length) return groupBy(notifications, 'Height');
		return [];
	}, [notifications]);

	const headingsToDisplay = useMemo(() => {
		if (mobileView) return ['Height', 'Block ID', 'Messages'];
		return chainHeadings;
	}, [mobileView]);

	return (
		<Wrapper>
			<Sidebar />
			<Container>
				<Modal
					onClose={() => {
						setIsModalOpen(false);
					}}
					isOpen={isModalOpen}
					title={`Block ID: ${selectedBlock?.blockId}`}
				>
					<ModalContainer>
						<List>
							<ModalListItem fullWidth={mobileView}>
								<Heading>Messages</Heading>
							</ModalListItem>
						</List>
						<List column>
							{selectedBlock?.messages?.map((item: any) => {
								return (
									<ModalListItem>
										<Cell
											cursor
											onClick={() =>
												navigate('/api/message', {
													state: { id: item.CID['/'] },
												})
											}
										>
											{item.CID['/']}
										</Cell>
									</ModalListItem>
								);
							})}
						</List>
					</ModalContainer>
				</Modal>
				<List>
					{headingsToDisplay.map((item: string) => (
						<ListItem fullWidth={mobileView} key={item}>
							<Heading>{item}</Heading>
						</ListItem>
					))}
				</List>
				<List column>
					{Object.keys(formattedNotifications).length > 0 &&
						Object.keys(formattedNotifications).map((item: any) => (
							<NotificationItem key={item}>
								<BlockHeight mobile={mobileView}>
									<Cell>{item}</Cell>
								</BlockHeight>
								<BlockData>
									{formattedNotifications[item].map((block: any) => (
										<BlockInformation key={block?.blockId || ''}>
											<Cell
												cursor
												mobile={mobileView}
												onClick={() => {
													setIsModalOpen(true);
													setSelectedBlock(block);
												}}
											>
												{shortenString(block?.blockId, 4, 4)}
											</Cell>
											{!mobileView && (
												<>
													<Cell
														cursor
														onClick={() =>
															navigate('/api/wallet', {
																state: { id: block.Miner },
															})
														}
													>
														{block.Miner}
													</Cell>
													<Cell>--</Cell>
												</>
											)}
											<Cell mobile={mobileView}>{block.numOfMessages}</Cell>
										</BlockInformation>
									))}
								</BlockData>
							</NotificationItem>
						))}
				</List>
			</Container>
		</Wrapper>
	);
}

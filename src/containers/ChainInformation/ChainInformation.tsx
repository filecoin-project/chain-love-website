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
} from './ChainInformation.styles';
import { chainHeadings } from './constant';

export function ChainInformation() {
	const navigate = useNavigate();
	const notifications = useChainNotifications();
	const mobileView = useMobileDetect();
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [selectedBlock, setSelectedBlock]: any = useState({});

	const formattedNotifications = useMemo(() => {
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
					title={`Block ID: ${
						mobileView
							? shortenString(selectedBlock?.blockId, 8, 8)
							: selectedBlock?.blockId
					}`}
				>
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
										{mobileView
											? shortenString(item.CID['/'], 10, 10)
											: item.CID['/']}
									</Cell>
								</ModalListItem>
							);
						})}
					</List>
				</Modal>
				<List>
					{headingsToDisplay.map((item: string) => (
						<ListItem fullWidth={mobileView} key={item}>
							<Heading>{item}</Heading>
						</ListItem>
					))}
				</List>
				<br />
				<br />
				<List column>
					{Object.keys(formattedNotifications).length > 0 &&
						Object.keys(formattedNotifications).map((item: any, i: number) => (
							<NotificationItem key={i + item}>
								<BlockHeight mobile={mobileView}>
									<Cell>{item}</Cell>
								</BlockHeight>
								<BlockData>
									{formattedNotifications[item].map((block: any, i: number) => (
										<BlockInformation key={i + (block?.blockId || '')}>
											<Cell
												cursor
												mobile={mobileView}
												onClick={() => {
													setIsModalOpen(true);
													setSelectedBlock(block);
												}}
												title={block?.blockId}
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
					{!(Object.keys(formattedNotifications).length > 0) && (
						<Heading>Loading chain information...</Heading>
					)}
				</List>
			</Container>
		</Wrapper>
	);
}

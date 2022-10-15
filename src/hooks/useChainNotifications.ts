import { useEffect, useReducer } from 'react';
import { ChainLoveAPI } from '../api/chain.love';

// const url = process.env.REACT_APP_FULL_NODE_WS_URL;
function notificationReducer(
	state: any[],
	{ type, payload }: { type: string; payload?: any },
) {
	switch (type) {
		case 'reset':
			return payload || [];

		case 'append':
			const newNotifications = payload;
			return [...newNotifications, ...state];
	}
}
let socketClient: WebSocket = null;
export function useChainNotifications() {
	const [notifications, setNotifications] = useReducer(notificationReducer, []);

	useEffect(() => {
		if (!socketClient) {
			socketClient = new WebSocket('wss://api.chain.love/rpc/v1');
			// Connection opened
			socketClient.addEventListener('open', (event) => {
				socketClient.send(
					'{ "jsonrpc": "2.0", "id":1, "method": "Filecoin.ChainNotify", "params": [ ] }',
				);
			});

			// Listen for messages
			socketClient.addEventListener('message', async (event) => {
				const data = JSON.parse(event.data);
				const filteredBlocks = (data.params || [])[1]?.filter(
					(i: any) => i.Type === 'current',
				);
				if (!!filteredBlocks?.length) {
					if (notifications.length < 20) {
						setNotifications({
							type: 'append',
							payload: await Promise.all(
								filteredBlocks[0].Val.Blocks.map(
									async (block: { [key: string]: any }, index: number) => {
										const blockId = filteredBlocks[0].Val.Cids[index]['/'];
										const res = await ChainLoveAPI.callMethod(
											'ChainGetBlockMessages',
											[{ '/': blockId }],
										);
										return {
											...block,
											blockId,
											numOfMessages: res?.result?.BlsMessages?.length || 0,
											messages: res?.result?.BlsMessages || [],
										};
									},
								),
							),
						});
					} else {
						setNotifications({
							type: 'reset',
							payload: filteredBlocks[0].Val.Blocks,
						});
					}
				}
			});
		}
	}, []);

	return notifications;
}

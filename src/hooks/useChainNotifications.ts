import { useEffect, useReducer } from 'react';
import { ChainLoveAPI } from '../api/chain.love';

// const url = process.env.REACT_APP_FULL_NODE_WS_URL;
function notificationReducer(
	state: any[],
	{ type, payload }: { type: string; payload?: any },
) {
	console.log(`state before ${type}`, { state });
	switch (type) {
		case 'reset':
			return payload || [];
		case 'append':
			const newNotifications = payload;

			return [...newNotifications, ...state];
		case 'revert':
			const cidsToFilter = payload.Cids.map((obj: { '/': string }) => obj['/']);
			const filteredNotifications = state.filter((i) => {
				return !cidsToFilter.includes(i.blockId);
			});
			console.log(`state after revert`, { state });
			return filteredNotifications;
	}
}

async function formatBlocks(data: { Blocks: any[]; Cids: any[] }) {
	return await Promise.all(
		data?.Blocks.map(async (block: { [key: string]: any }, index: number) => {
			const blockId = data.Cids[index]['/'];
			const res = await ChainLoveAPI.callMethod('ChainGetBlockMessages', [
				{ '/': blockId },
			]);
			return {
				...block,
				blockId,
				numOfMessages: res?.result?.BlsMessages?.length || 0,
				messages: res?.result?.BlsMessages || [],
			};
		}),
	);
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
				const paramsByType: {
					[key: string]: { Blocks: any[]; Cids: any[]; Height: number };
				} = {};
				for (const param of data.params?.flat()) {
					const type: string = param?.Type;
					if (type) {
						paramsByType[type] = param.Val;
					}
				}
				if (paramsByType['current']?.Blocks?.length) {
					setNotifications({
						type: 'reset',
						payload: await formatBlocks(paramsByType['current']),
					});
				} else {
					if (paramsByType['apply']?.Blocks?.length) {
						setNotifications({
							type: 'append',
							payload: await formatBlocks(paramsByType['apply']),
						});
					}

					if (paramsByType['revert']?.Blocks?.length) {
						setNotifications({
							type: 'revert',
							payload: paramsByType['revert'],
						});
					}
				}
			});
		}
	}, []);

	return notifications;
}

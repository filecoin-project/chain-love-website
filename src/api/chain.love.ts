import axios from 'axios';
import { APIRequestBody } from '../types';

const API_TYPE = process.env.REACT_APP_LOTUS_API_TYPE;
export class ChainLoveAPI {
	public static getJSONRPCBody(method: string, params: any): APIRequestBody {
		return {
			jsonrpc: '2.0',
			method: `Filecoin.${method}`,
			params,
			id: 1,
		};
	}

	public static async callMethod(method: string, params: any) {
		const { data } = await axios.post(
			API_TYPE === 'fullnode'
				? process.env.REACT_APP_FULL_NODE_API_URL
				: process.env.REACT_APP_GATEWAY_API_URL,
			this.getJSONRPCBody(method, params),
			{
				headers: {
					Accept: '*/*',
					'Access-Control-Allow-Origin': '*',
					'Content-type': 'application/json',
				},
			},
		);
		console.log({ data });
		return data;
	}
}

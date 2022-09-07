import axios from 'axios';
import { APIRequestBody } from '../types';

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
			`https://api.chain.love/rpc/v1`,
			this.getJSONRPCBody(method, params),
		);
		return data;
	}
}

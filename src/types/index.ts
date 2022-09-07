export type APIMethod = {
	name?: string;
	request: any[];
	response: any; //TO DO Type response
};

export type APIService = {
	title: string;
	description: string;
	permissions: string;
	method: APIMethod;
};

export type APISection = {
	heading: string;
	description: string;
	services: APIService[];
};

export type APIJson = APISection[];

export type APIRequestBody = {
	jsonrpc: string;
	method: string;
	params: any;
	id: number;
};

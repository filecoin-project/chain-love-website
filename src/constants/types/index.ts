type Method = {
	request: any[];
	response: any; //TO DO Type response
};

type APIService = {
	title: string;
	description: string;
	permissions: string;
	method: Method;
};

type APISection = {
	heading: string;
	description: string;
	services: APIService[];
};

type APIJson = APISection[];

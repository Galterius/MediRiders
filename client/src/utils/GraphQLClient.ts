import { GraphQLClient } from 'graphql-request';

export class GQLClient extends GraphQLClient {
	constructor(token: string) {
		super('http://localhost:3000/graphql', {
			headers: {
				authorization: `Bearer ${token}`
			}
		});
	}
}

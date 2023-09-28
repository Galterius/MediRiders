import { browser } from '$app/environment';
import { GQLClient } from '../../utils/GraphQLClient';
import type { PageLoad } from './$types';
import { gql } from 'graphql-request';

export const load: PageLoad = async () => {
	let accessToken = '';

	if (!browser) {
		return;
	}

	accessToken = localStorage.getItem('accessToken') || '';
	console.log(accessToken);
	const client = new GQLClient(accessToken);
	const query = gql`
		{
			getAllOrders {
				state
				canceledBy
				medicId
				isCancelled
				description
				id
			}
		}
	`;

	console.log(await client.request(query));
};

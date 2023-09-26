import type { PageLoad } from './$types';
import { request, gql } from 'graphql-request';

export const load: PageLoad = async (): Promise<{ countries: [] }> => {
	const query = gql`
		{
			countries {
				name
				emoji
			}
		}
	`;
	return await request('https://countries.trevorblades.com/', query);
};

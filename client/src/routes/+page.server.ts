import { redirect } from '@sveltejs/kit';
import type { Actions } from './$types';
import { request as gqlRequest, gql } from 'graphql-request';

//TODO: THIS IS ONLY THE HAPPY PATH, HANDEL INCORRECT DATA AS WELL
export const actions: Actions = {
	default: async ({ request }) => {
		const data = await request.formData();
		const mutation = gql`
			mutation login($email: String!, $password: String!) {
				login(email: $email, password: $password) {
					access_token
				}
			}
		`;
		const variables = {
			email: data.get('email'),
			password: data.get('password')
		};

		const response: { access_token: string } = await gqlRequest(
			'http://localhost:3000/graphql',
			mutation,
			variables
		);

		localStorage.setItem('accessToken', response.access_token);
	}
};

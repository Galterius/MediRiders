import type { Actions } from './$types';
import { request as gqlRequest, gql } from 'graphql-request';

//TODO: THIS IS ONLY THE HAPPY PATH, HANDEL INCORRECT DATA AS WELL
export const actions: Actions = {
	default: async ({ request }) => {
		const data = await request.formData();
		const mutation = gql`
			mutation register($email: String!, $password: String!, $name: String!, $role: String!) {
				signup(email: $email, password: $password, name: $name, role: $role) {
					access_token
				}
			}
		`;

		const variables = {
			email: data.get('email'),
			password: data.get('password'),
			name: data.get('name'),
			role: data.get('isMedic') ? 'medic' : 'rider'
		};

		return await gqlRequest('http://localhost:3000/graphql', mutation, variables);

		//localStorage.setItem('accessToken', response.signup.access_token);
	}
} satisfies Actions;

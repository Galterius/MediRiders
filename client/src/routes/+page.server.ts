import { redirect } from '@sveltejs/kit';
import type { Actions } from './$types';
import axios from 'axios';

export const actions: Actions = {
	default: async ({ request }) => {
		const data = await request.formData();
		const email = data.get('email');
		const password = data.get('password');

		const endpoint = 'http://127.0.0.1:3000/graphql';
		const headers = {
			'content-type': 'application/json'
		};
		console.log(email, password);
		// const graphqlQuery = {
		// 	operationName: 'login',
		// 	query: `mutation login { login(email: "${email}", password: "${password}") { access_token } }`,
		// 	variables: {}
		// };

		// const response = (
		// 	await axios({
		// 		url: endpoint,
		// 		method: 'post',
		// 		headers: headers,
		// 		data: graphqlQuery
		// 	})
		// ).data.data.login.access_token;
		// console.log(response);
		// throw redirect(301, '/orders');
	}
};

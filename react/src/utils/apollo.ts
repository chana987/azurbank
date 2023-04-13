import {
	ApolloClient,
	createHttpLink,
	InMemoryCache,
} from '@apollo/client';
// import { setContext } from '@apollo/client/link/context';
// import * as LS from './localStorage';

const httpLink = createHttpLink({
	uri: process.env.GRAPHQL_API || 'http://localhost:3000/api/graphql',
	fetchOptions: {
		mode: 'cors',
	},
});

// const authLink = setContext((_, { headers }) => {
// 	const jwt = LS.getJwt();
// 	return {
// 		headers: {
// 			...headers,
// 		},
// 	};
// });

const client = new ApolloClient({
	cache: new InMemoryCache(),
	link: httpLink,
});

export default client;

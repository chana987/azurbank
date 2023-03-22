import {
	ApolloClient,
	createHttpLink,
	InMemoryCache,
} from '@apollo/client';
// import { UserData } from './types';

export const saveJwt = (jwt: string) => {
	sessionStorage.setItem('token', `Bearer ${jwt}`);
};
export const removeJwt = () => {
	sessionStorage.removeItem('token');
};

export const getJwt = () => {
	return sessionStorage.getItem('token');
};

export const saveUserData = () => Promise<boolean>;
export const removeUserData = () => Promise<boolean>;
// export const getUserData = () => Promise<UserData>;

const httpLink = createHttpLink({
	uri: process.env.GRAPHQL_API || 'http://localhost:3000/api/graphql',
});

const client = new ApolloClient({
	link: httpLink,
	cache: new InMemoryCache(),
});

export default client;

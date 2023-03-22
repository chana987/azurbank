import { useLazyQuery } from '@apollo/client';
import {
	USERS, USER,
} from '../graphql/queries';
import React, { createContext } from 'react';
import { UsersContextState } from 'utils/types';

export const UsersContext = createContext({} as UsersContextState);

export const UsersProvider = ({ children }: { children: React.ReactElement; }) => {
	const [getUsers, { data, loading }] = useLazyQuery(USERS);
	const [getUser, { data: userData }] = useLazyQuery(USER, {
		variables: { id: '1' },
	});

	const iState = {
		user: userData?.usersPermissionsUser?.docs || {},
		users: data?.usersPermissionsUsers?.docs || [],
		getUser,
		getUsers,
		loading,
	} as UsersContextState;

	return (
		<UsersContext.Provider value={iState}>
			{children}
		</UsersContext.Provider>
	);
};

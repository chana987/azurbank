import React, { useContext, useEffect } from 'react';
import DataTable from 'components/DataTable';
import { usersColumnHeaders } from 'utils/constants';
import { UsersContext } from 'context/users';
import { User } from 'utils/types';
import Paper from '@mui/material/Paper';

const Users = () => {
	const { users, getUsers } = useContext(UsersContext);

	useEffect(() => {
		if (!users.length) {
			getUsers();
		}
	}, []);

	return (
		<Paper variant="main">
			<DataTable<User>
				rows={users}
				columns={usersColumnHeaders}
				title="עמיתים"
			/>
		</Paper>
	);
};

export default Users;
import React, { useContext, useEffect } from 'react';
import DataTable from 'components/MuiTable';
import { usersColumnHeaders } from 'utils/constants';
import { UsersContext } from 'context/users';
import { IUser } from 'utils/types';
import Paper from '@mui/material/Paper';
import { Typography } from '@mui/material';

const Users = () => {
	const { users, getUsers } = useContext(UsersContext);

	useEffect(() => {
		if (!users.length) {
			getUsers();
		}
	}, []);

	return (
		<Paper variant="main">
			<Typography variant="h5" sx={{ textAlign: 'start', padding: '8px' }}>חברים</Typography>
			<DataTable<IUser>
				columns={usersColumnHeaders}
				rows={users || []}
				singular='user'
			/>
		</Paper>
	);
};

export default Users;
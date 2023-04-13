import React, { useContext, useEffect } from 'react';
import DataTable from 'components/DataTable';
import { userActionsColumnHeaders, userStocksColumnHeaders } from 'utils/constants';
import { UsersContext } from 'context/users';
import { ITransaction, IUserStock } from 'utils/types';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';
import { useLocation } from 'react-router-dom';
import { formatShekel } from 'utils/helpers';

const SingleUser = () => {
	const { user, handleGetUser } = useContext(UsersContext);
	const { pathname } = useLocation();
	const id = pathname.split('/')[2];

	useEffect(() => {
		if ((!user?.id || (user?.id !== id)) && id) {
			handleGetUser(id);
		}
	}, []);

	return (
		<Paper variant="main">
			<CardContent>
				<Grid
					container
				>
					<Grid
						container
						item
						direction="column"
						textAlign="start"
						md={2}
						sm={3}
						xs={6}
					>
						<Typography sx={{fontWeight: 800}}>
                שם העמית/ה:
						</Typography>
						<Typography sx={{fontWeight: 800}}>
                מספר חשבון:
						</Typography>
						<Typography sx={{fontWeight: 800}}>
                שווי התיק:
						</Typography>
						<Typography sx={{fontWeight: 800}}>
                יתרה שקלית:
						</Typography>
					</Grid>
					<Grid
						container
						item
						direction="column"
						textAlign="start"
						md={3}
						xs={6}
					>
						<Typography>
							{`${user?.username} ${user?.lastName}`}
						</Typography>
						<Typography>
							{user?.accountId}
						</Typography>
						<Typography>
							{user?.portfolioValue}
						</Typography>
						<Typography>
							{formatShekel(user?.balance || 0)}
						</Typography>
					</Grid>
				</Grid>
			</CardContent>
			<DataTable<IUserStock>
				rows={user?.stocks || []}
				columns={userStocksColumnHeaders}
				title="מניות"
			/>
			<Divider />
			<DataTable<ITransaction>
				rows={user?.transactions || []}
				columns={userActionsColumnHeaders}
				title="פעולות"
			/>
		</Paper>
	);
};

export default SingleUser;
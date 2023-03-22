import React, { useContext, useEffect } from 'react';
import DataTable from 'components/DataTable';
import { userActionsColumnHeaders, userStocksColumnHeaders } from 'utils/constants';
import { UsersContext } from 'context/users';
import { ITransaction, IUserStock } from 'utils/types';
import Paper from '@mui/material/Paper';
import { useParams } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import { Divider } from '@mui/material';

const SingleUser = () => {
	const { id } = useParams();
	const { user, getUser } = useContext(UsersContext);

	useEffect(() => {
		if ((!user?.id || (user?.id !== id)) && id) {
			getUser(id);
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
							{user?.id}
						</Typography>
						<Typography>
							{user?.stocks?.map(s => s.value)?.reduce((a, b) => (a || 0) + (b || 0), 0)?.toLocaleString?.('en-US', {
								style: 'currency',
								currency: 'ILS',
								minimumFractionDigits: 2,
								maximumFractionDigits: 5,
							})}
						</Typography>
						<Typography>
							{user?.balance?.toLocaleString?.('en-US', {
								style: 'currency',
								currency: 'ILS',
								minimumFractionDigits: 2,
								maximumFractionDigits: 5,
							})}
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
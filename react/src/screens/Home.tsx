import React, { useContext, useEffect } from 'react';
import { StocksContext } from 'context/stocks';
import { stocksColumnHeaders } from 'utils/constants';
import Paper from '@mui/material/Paper';
import DataTable from 'components/DataTable';
import { IStock } from 'utils/types';

const Home = () => {
	const { stocks, getStocks } = useContext(StocksContext);

	useEffect(() => {
		if (!stocks?.length) {
			getStocks();
		}
	}, []);

	return (
		<Paper variant="main">
			<DataTable<IStock>
				columns={stocksColumnHeaders}
				rows={stocks || []}
				title="מניות"
			/>
		</Paper>
	);
};

export default Home;
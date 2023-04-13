import React, { useContext, useEffect } from 'react';
import { StocksContext } from 'context/stocks';
import Paper from '@mui/material/Paper';
import { useLocation } from 'react-router-dom';

const SingleStock = () => {
	const { stock, handleGetStock } = useContext(StocksContext);
	const { pathname } = useLocation();
	const id = pathname.split('/')[2];

	useEffect(() => {
		if ((!stock?.id || (stock?.id !== id)) && id) {
			handleGetStock(id);
		}
	}, []);

	return (
		<Paper variant="main">
      
		</Paper>
	);
};

export default SingleStock;
import { ValueScale } from '@devexpress/dx-react-chart';
import { Chart, LineSeries } from '@devexpress/dx-react-chart-material-ui';
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
			<DataChart data={ { id: '1' } } />
		</Paper>
	);
};

interface Props<T extends Record<string, any>> {
  data: T;
}

const DataChart = <T extends { id: string }> (props: Props<T>) => {
	const { stocks } = useContext(StocksContext);
	const stock = stocks?.find((stock) => stock.id === props.data.id);
	const data = stock?.historicPrices;

	return (
		<Paper>
			<Chart
				data={data || []}
			>
				<ValueScale name="value" />
				<LineSeries valueField="value" argumentField="date" />
			</Chart>
		</Paper>
	);
};
export default Home;
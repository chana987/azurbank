import React, { useContext, useMemo } from 'react';
import Chart, {
	ArgumentAxis,
	CommonSeriesSettings,
	Legend,
	Series,
	ValueAxis,
	ConstantLine,
	Label,
} from 'devextreme-react/chart';
import Paper from '@mui/material/Paper';
import { StocksContext } from 'context/stocks';

interface Props<T extends Record<string, any>> {
  data: T;
	detailField: string;
}

const DataChart = <T extends { id: string }> (props: Props<T>) => {
	const { stocks } = useContext(StocksContext);
	const stock = stocks.find((stock) => stock.id === props.data.id);
	const dataArray = useMemo(() => stock ? stock.historicPrices : [], [stock]);

	const dummyData = [
		{ date: '2021-01-01', value: 100 },
		{ date: '2021-01-02', value: 110 },
		{ date: '2021-01-03', value: 120 },
		{ date: '2021-01-04', value: 130 },
		{ date: '2021-01-05', value: 125 },
		{ date: '2021-01-06', value: 90 },
		{ date: '2021-01-07', value: 160 },
		{ date: '2021-01-08', value: 122 },
		{ date: '2021-01-09', value: 121 },
		{ date: '2021-01-10', value: 77 },
		{ date: '2021-01-11', value: 150 },
		{ date: '2021-01-12', value: 83 },
	];

	return (
		<Paper>
			<Chart
				title="היסטוריה"
				dataSource={dummyData}
				palette="Harmony Light"
				id="chart"
			>
				<CommonSeriesSettings argumentField="date" />
				<Series
					name="מחיר"
					valueField="value"
					axis="value"
					type="line"
					color="#6b71c3"
				/>

				<ArgumentAxis>
					<Label overlappingBehavior="stagger" />
				</ArgumentAxis>

				<ValueAxis
					name="value"
					position="right"
					valueMarginsEnabled={false}
				/>
			</Chart>
		</Paper>
	);
};

export default DataChart;
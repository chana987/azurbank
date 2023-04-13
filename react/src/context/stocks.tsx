import { useLazyQuery } from '@apollo/client';
import {
	STOCK,
	STOCKS,
} from '../graphql/queries';
import React, { createContext } from 'react';
import { StocksContextState } from 'utils/types';

export const StocksContext = createContext({} as StocksContextState);

export const StocksProvider = ({ children }: { children: React.ReactElement; }) => {
	const [getStocks, { data, loading }] = useLazyQuery(STOCKS);
	const [getStock, { data: stockData }] = useLazyQuery(STOCK);

	const handleGetStock = (id: string) => {
		getStock({ variables: { id } });
	};

	const iState = {
		stocks: data?.Stocks?.docs || [],
		stock: stockData?.Stock || {},
		handleGetStock,
		getStock,
		getStocks,
		loading,
	} as StocksContextState;

	return (
		<StocksContext.Provider value={iState}>
			{children}
		</StocksContext.Provider>
	);
};

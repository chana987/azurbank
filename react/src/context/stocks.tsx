import { useLazyQuery } from '@apollo/client';
import {
	STOCKS,
} from '../graphql/queries';
import React, { createContext } from 'react';
import { StocksContextState } from 'utils/types';

export const StocksContext = createContext({} as StocksContextState);

export const StocksProvider = ({ children }: { children: React.ReactElement; }) => {
	const [getStocks, { data, loading }] = useLazyQuery(STOCKS);

	const iState = {
		stocks: data?.Stocks?.docs || [],
		getStocks,
		loading,
	} as StocksContextState;

	return (
		<StocksContext.Provider value={iState}>
			{children}
		</StocksContext.Provider>
	);
};

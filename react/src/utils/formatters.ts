import { Action, Dividend, HistoricPrice, Stock, User, UserStock } from './types';

export const formatAction = (a: any): Action => {
	return {
		...formatStock(a?.stock?.data),
		id: a?.id,
		amount: a?.amount,
		date: a?.date,
		status: a?.status,
		type: a?.type,
		value: a?.stock?.data?.attributes?.historicPrices?.[0]?.stockPrice * a?.amount,
	};
};

export const formatActions = (actions: any): Action[] => {
	return actions?.map((a: any) => {
		return formatAction(a);
	});
};

export const formatDividend = (d: any): Dividend => {
	return {
		id: d?.id,
		date: d?.attributes?.date,
		percentage: d?.attributes?.percentage,
		sum: d?.attributes?.sum,
		xDate: d?.attributes?.xDate,
	};
};

export const formatDividends = (dividends: any): Dividend[] => {
	return dividends?.map((d: any) => {
		return formatDividend(d);
	});
};

export const formatHistoricPrice = (h: any): HistoricPrice => {
	return {
		id: h?.id,
		date: h?.date,
		stockPrice: h?.stockPrice,
	};
};

export const formatHistoricPrices = (historicPrices: any): HistoricPrice[] => {
	return historicPrices?.map((h: any) => {
		return formatHistoricPrice(h);
	});
};

export const formatStock = (s: any): Stock => {
	return {
		id: s?.id,
		companyName: s?.attributes?.companyName,
		currency: s?.attributes?.currency,
		currentPrice: s?.attributes?.historicPrices?.[0]?.stockPrice,
		dividends: formatDividends(s?.attributes?.dividends),
		DPR: s?.attributes?.DPR,
		hebrewName: s?.attributes?.hebrewName,
		historicPrices: formatHistoricPrices(s?.attributes?.historicPrices),
		isin: s?.attributes?.isin,
		issuerId: s?.attributes?.issuerId,
		marketValue: s?.attributes?.marketValue,
		PE: s?.attributes?.PE,
		securityId: s?.attributes?.securityId,
		stockPrice: s?.attributes?.historicPrices?.[0]?.stockPrice,
		symbol: s?.attributes?.symbol,
	};
};    

export const formatStocks = (stocks: any): Stock[] => {
	return stocks?.map((s: unknown) => {
		return formatStock(s);
	});
};

export const formatUser = (u: any): User => {
	const user = {
		id: u?.id,
		actions: formatActions(u?.attributes?.actions),
		balance: u?.attributes?.balance,
		birthday: u?.attributes?.birthday,
		email: u?.attributes?.email,
		username: u?.attributes?.username,
		gender: u?.attributes,
		joinDate: u?.attributes?.joinDate || u?.attributes?.createdAt,
		lastName: u?.attributes?.lastName,
		portfolioValue: u?.attributes?.stocks?.reduce((acc: number, s: any) => {
			return acc + s?.stock?.data?.attributes?.values?.[0]?.value * s?.amount;
		}, 0) || 0,
		role: u?.attributes?.role?.data?.attributes?.name,
		stocks: formatUserStocks(u?.attributes?.stocks),
	};
	return user;
};

export const formatUsers = (users: any): User[] => {
	return users?.map((u: any) => {
		return formatUser(u);
	});
};

export const formatUserStocks = (stocks: any): UserStock[] => {
	return stocks?.map((s: any) => {
		return {
			...formatStock(s?.stock?.data),
			id: s?.stock?.data?.id,
			amount: s?.amount,
			value: s?.stock?.data?.attributes?.historicPrices?.[0]?.stockPrice * s?.amount,
		};
	});
};

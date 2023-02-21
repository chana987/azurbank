import { Action, Currency, HistoricPrice, Stock, User, UserStock } from './types';
import MaterialReactTable, { MRT_ColumnDef } from 'material-react-table';

export const currencySymbols: Record<string, string> = {
	[Currency.ILS]: '₪',
	[Currency.USD]: '$',
	[Currency.EUR]: '€',
};

export const stockColumnHeaders: MRT_ColumnDef<HistoricPrice>[] = [
	{
		header: 'תאריך',
		accessorKey: 'date',
		Cell: ({ cell }) => cell.getValue<string>() ? cell.getValue<Date>()?.toLocaleDateString() : '-',
	},
	{
		header: 'מחיר למנייה',
		accessorKey: 'stockPrice',
		minSize: 150,
		Cell: ({ cell }) => (
			cell.getValue<number>()?.toLocaleString?.('en-US', {
				style: 'currency',
				currency: 'ILS',
				minimumFractionDigits: 2,
				maximumFractionDigits: 5,
			})),
	},
];

export const stocksColumnHeaders: MRT_ColumnDef<Stock>[] = [
	{
		header: 'שם החברה',
		accessorKey: 'hebrewName',
	}, 
	{
		header: 'סמל',
		accessorKey: 'symbol',
	},
	{
		header: 'שווי שוק',
		accessorKey: 'marketValue',
		Cell: ({ cell }) => (
			cell.getValue<number>()?.toLocaleString?.('en-US', {
				style: 'currency',
				currency: 'ILS',
				minimumFractionDigits: 2,
				maximumFractionDigits: 5,
			})),
	},
	{
		header: 'P/E',
		accessorKey: 'PE',
	},
	{
		header: 'תשואת דיבידנדים',
		accessorKey: 'DPR',
	},
	{
		header: 'מחיר למנייה',
		accessorKey: 'stockPrice',
		Cell: ({ cell }) => (
			cell.getValue<number>()?.toLocaleString?.('en-US', {
				style: 'currency',
				currency: 'ILS',
				minimumFractionDigits: 2,
				maximumFractionDigits: 5,
			})),
	},
];

export const userActionsColumnHeaders: MRT_ColumnDef<Action>[] = [
	{
		header: 'סוג פעולה',
		accessorKey: 'type',
	},
	{
		header: 'תאריך',
		accessorKey: 'date',
		maxSize: 50,
		Cell: ({ cell }) => cell.getValue<string>() ? new Date(cell.getValue<string>()).toLocaleDateString('he-IL') : '-',
	},
	{
		header: 'שם החברה',
		accessorKey: 'hebrewName',
	},
	{
		header: 'כמות',
		accessorKey: 'amount',
	},
	{
		header: 'מחיר למנייה',
		accessorKey: 'stockPrice',
		maxSize: 50,
		Cell: ({ cell }) => (
			cell.getValue<number>()?.toLocaleString?.('en-US', {
				style: 'currency',
				currency: 'ILS',
				minimumFractionDigits: 2,
				maximumFractionDigits: 5,
			})),
	},
	{
		header: 'סה"כ מחיר',
		accessorKey: 'value',
		maxSize: 50,
		Cell: ({ cell }) => (
			cell.getValue<number>()?.toLocaleString?.('en-US', {
				style: 'currency',
				currency: 'ILS',
				minimumFractionDigits: 2,
				maximumFractionDigits: 5,
			})),
	},
	{
		header: 'סטטוס',
		accessorKey: 'status',
		maxSize: 50,
	},
];

export const usersColumnHeaders: MRT_ColumnDef<User>[] = [
	{
		header: 'מספר חשבון',
		accessorKey: 'id',
	},
	{
		header: 'שם העמית/ה',
		accessorKey: 'firstName',
	},
	{
		header: 'שם משפחה',
		accessorKey: 'lastName',
	},
	{
		header: 'יום הולדת',
		accessorKey: 'birthday',
		Cell: ({ cell }) => cell.getValue<string>() ? new Date(cell.getValue<string>()).toLocaleDateString('he-IL') : '-',
	},
	{
		header: 'תאריך הצטרפות',
		accessorKey: 'joinDate',
		Cell: ({ cell }) => cell.getValue<string>() ? new Date(cell.getValue<string>()).toLocaleDateString('he-IL') : '-',
	},
	{
		header: 'שווי תיק',
		accessorKey: 'portfolioValue',
		Cell: ({ cell }) => (
			cell.getValue<number>()?.toLocaleString?.('en-US', {
				style: 'currency',
				currency: 'ILS',
				minimumFractionDigits: 2,
				maximumFractionDigits: 5,
			})),
	},
];

export const userStocksColumnHeaders: MRT_ColumnDef<UserStock>[] = [
	{
		header: 'שם החברה',
		accessorKey: 'hebrewName',
	},
	{
		header: 'סמל',
		accessorKey: 'symbol',
	},
	{
		header: 'P/E',
		accessorKey: 'PE',
	},
	{
		header: 'תשואת דיבידנדים',
		accessorKey: 'DPR',
	},
	{
		header: 'מחיר למנייה',
		accessorKey: 'stockPrice',
		Cell: ({ cell }) => (
			cell.getValue<number>()?.toLocaleString?.('en-US', {
				style: 'currency',
				currency: 'ILS',
				minimumFractionDigits: 2,
				maximumFractionDigits: 5,
			})),
	},
	{
		header: 'כמות',
		accessorKey: 'amount',
	},
	{
		header: 'סה"כ שווי',
		accessorKey: 'value',
		Cell: ({ cell }) => (
			cell.getValue<number>()?.toLocaleString?.('en-US', {
				style: 'currency',
				currency: 'ILS',
				minimumFractionDigits: 2,
				maximumFractionDigits: 5,
			})),
	},
];

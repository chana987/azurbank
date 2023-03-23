import { IStock, ITransaction, IUser, IUserStock } from './types';
import MaterialReactTable, { MRT_ColumnDef } from 'material-react-table';
import Link from '@mui/material/Link';

export const stockColumnHeaders: MRT_ColumnDef<IStock>[] = [
	{
		header: 'מחיר למנייה',
		accessorKey: 'latestPrice',
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

export const stocksColumnHeaders: MRT_ColumnDef<IStock>[] = [
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
		accessorKey: 'capital',
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
		accessorKey: 'latestPrice',
		Cell: ({ cell }) => (
			cell.getValue<number>()?.toLocaleString?.('en-US', {
				style: 'currency',
				currency: 'ILS',
				minimumFractionDigits: 2,
				maximumFractionDigits: 5,
			})),
	},
];

export const userActionsColumnHeaders: MRT_ColumnDef<ITransaction>[] = [
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
		accessorKey: 'stock.hebrewName',
	},
	{
		header: 'כמות',
		accessorKey: 'quantity',
	},
	{
		header: 'מחיר למנייה',
		accessorKey: 'stock.latestPrice',
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

export const usersColumnHeaders: MRT_ColumnDef<IUser>[] = [
	{
		header: 'מספר חשבון',
		accessorKey: 'accountId',
		Cell: ({ cell }) => {
			return (
				''
			)},
	},
	{
		header: 'שם העמית/ה',
		accessorKey: 'username',
	},
	{
		header: 'שם משפחה',
		accessorKey: 'lastName',
	},
	// {
	// 	header: 'יום הולדת',
	// 	accessorKey: 'birthday',
	// 	Cell: ({ cell }) => cell.getValue<string>() ? new Date(cell.getValue<string>()).toLocaleDateString('he-IL') : '-',
	// },
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

export const userStocksColumnHeaders: MRT_ColumnDef<IUserStock>[] = [
	{
		header: 'שם החברה',
		accessorKey: 'stock.hebrewName',
	},
	{
		header: 'סמל',
		accessorKey: 'stock.symbol',
	},
	{
		header: 'P/E',
		accessorKey: 'stock.PE',
	},
	{
		header: 'תשואת דיבידנדים',
		accessorKey: 'stock.DPR',
	},
	{
		header: 'מחיר למנייה',
		accessorKey: 'stock.latestPrice',
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
		accessorKey: 'quantity',
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

import { Column, IStock, ITransaction, IUser, IUserStock } from './types';
import MaterialReactTable, { MRT_ColumnDef } from 'material-react-table';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import { formatShekel } from './helpers';
import { User_Transactions_Status, User_Transactions_Type } from './globalTypes';
import { findInDictionary } from './dictionary';

export const menuItems = [
	{
		name: 'מניות',
		path: '/',
	},
	{
		name: 'חברים',
		path: '/users',
	},
	{
		name: 'מעבר לאתר ביזפורטל',
		path: 'https://www.bizportal.co.il/',
		target: '_blank',
		icon: OpenInNewIcon,
	},
	{
		name: 'מעבר לאתר הבורסה',
		path: 'https://www.tase.co.il/he',
		target: '_blank',
		icon: OpenInNewIcon,
	},
];

export const stocksColumnHeaders: Column<IStock>[] = [
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
		formatValue: (value) => formatShekel(value),
	},
];

export const userActionsColumnHeaders: MRT_ColumnDef<ITransaction>[] = [
	{
		header: 'סוג פעולה',
		accessorKey: 'type',
		Cell: ({ cell }) => findInDictionary(cell.getValue<User_Transactions_Type>()),
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
		accessorKey: 'price',
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
		accessorKey: 'sum',
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
		Cell: ({ cell }) => findInDictionary(cell.getValue<User_Transactions_Status>()),
	},
];

export const usersColumnHeaders: Column<IUser>[] = [
	{
		header: 'מספר חשבון',
		accessorKey: 'accountId',
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
		formatValue: (value) => formatShekel(value),
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

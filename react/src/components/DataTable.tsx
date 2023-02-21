import React, { useMemo } from 'react';
import MaterialReactTable, {
	MRT_ColumnDef,
} from 'material-react-table';
import Typography from '@mui/material/Typography';
import DataChart from './Chart';
import { MRT_Localization_HE } from 'utils/helpers';

interface Props<T extends Record<string, any>> {
	columns: MRT_ColumnDef<T>[];
	details?: string;
	rows: T[];
	title?: string;
}

const Table = <T extends { id: string }> (props: Props<T>) => {
	const columns = useMemo(() => props.columns, []);

	return (
		<MaterialReactTable
			columns={columns}
			data={props.rows}
			enableColumnActions={false}
			enableColumnFilters={false}
			enableColumnOrdering={false}
			enableColumnResizing={false}
			enableDensityToggle={false}
			enableExpanding={props.details ? true : false}
			enableHiding={false}
			enableSorting={false}
			icons={{
				MoreHorizIcon: 'expand_more',
			}}
			localization={MRT_Localization_HE}
			manualExpanding={false}
			muiSearchTextFieldProps={{
				placeholder: 'חיפוש',
				sx: { minWidth: '18rem' },
				variant: 'outlined',
			}}
			positionGlobalFilter="right"
			renderDetailPanel={({ row }) => (
				props.details ? <DataChart data={row.original} detailField={props.details} /> : <Typography>אין נתונים</Typography>
			)}
			renderTopToolbarCustomActions={() => (
				<Typography variant="h5">{props.title}</Typography>
			)}
			renderBottomToolbarCustomActions={() => (
				<div style={{ flex: 1 }} />
			)}
		/>
	);
};

export default Table;

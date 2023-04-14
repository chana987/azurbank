import React, { useMemo } from 'react';
import MaterialReactTable, {
	MRT_ColumnDef,
} from 'material-react-table';
import Typography from '@mui/material/Typography';
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
			data={props.rows || []}
			enableColumnOrdering={false}
			enableDensityToggle={false}
			enableExpanding={props.details ? true : false}
			enableHiding={false}
			icons={{
				MoreHorizIcon: 'expand_more',
			}}
			localization={MRT_Localization_HE}
			manualExpanding={false}
			muiSearchTextFieldProps={{
				placeholder: 'חיפוש',
				sx: { minWidth: '18rem' },
			}}
			positionGlobalFilter="right"
			renderTopToolbarCustomActions={() => (
				<Typography variant="h5">{props.title}</Typography>
			)}
			renderBottomToolbarCustomActions={() => (
				<div style={{ flex: 1 }} />
			)}
			renderRowActions={() => (
				<div style={{ flex: 1, backgroundColor: 'green' }}>test</div>
			)}
		/>
	);
};

export default Table;

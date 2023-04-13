import * as React from 'react';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Column, Order } from 'utils/types';
import { useNavigate } from 'react-router-dom';

interface Props<T extends Record<string, any>> {
  singular?: string;
	columns: Column<T>[];
  defaultOrderBy?: keyof T;
	rows: T[];
}

const DataTable = <T extends { id: string }> (props: Props<T>) => {
	const { singular, columns, defaultOrderBy, rows } = props;
	const navigate = useNavigate();
	const [order, setOrder] = React.useState<Order>('asc');
	const [orderBy, setOrderBy] = React.useState<keyof T>(defaultOrderBy || 'id');
	const [selected, setSelected] = React.useState<readonly string[]>([]);
	const [page, setPage] = React.useState(0);
	const [rowsPerPage, setRowsPerPage] = React.useState(10);
	const [paddingHeight, setPaddingHeight] = React.useState(0);

	const handleChangePage = React.useCallback(
		(event: unknown, newPage: number) => {
			// Avoid a layout jump when reaching the last page with empty rows.
			const numEmptyRows =
        newPage > 0 ? Math.max(0, (1 + newPage) * rowsPerPage - rows.length) : 0;

			const newPaddingHeight = 53 * numEmptyRows;
			setPaddingHeight(newPaddingHeight);
		},
		[order, orderBy, rowsPerPage],
	);

	const handleChangeRowsPerPage = React.useCallback(
		(event: React.ChangeEvent<HTMLInputElement>) => {
			// There is no layout jump to handle on the first page.
			setPaddingHeight(0);
		},
		[order, orderBy],
	);

	return (
		<Box sx={{ width: '100%' }}>
			<Paper sx={{ width: '100%', mb: 2 }}>
				<TableContainer>
					<Table
						sx={{ minWidth: 750 }}
						aria-labelledby="tableTitle"
						size='medium'
					>
						<TableHead>
							<TableRow>
								{columns.map((column, i) => (
									<TableCell
										key={i}>
										{column.header}
									</TableCell>
								))}
							</TableRow>
						</TableHead>
						<TableBody>
							{rows.map((row, index) => {
								return (
									<TableRow
										onClick={() => { navigate(`/${singular}/${row.id}/`); }}
										key={index}
										hover
										tabIndex={-1}
										sx={{ cursor: 'pointer' }}
									>
										{columns?.map((column, index) => {
											const value = row[column.accessorKey];
											return (
												<TableCell key={index} align={column.align || 'right'}>
													{value as string}
												</TableCell>
											);
										})}
									</TableRow>
								);
							})
							}
							{paddingHeight > 0 && (
								<TableRow
									style={{
										height: paddingHeight,
									}}
								>
									<TableCell colSpan={6} />
								</TableRow>
							)}
						</TableBody>
					</Table>
				</TableContainer>
				{/* <TablePagination
					rowsPerPageOptions={[5, 10, 25]}
					component="div"
					count={rows.length}
					rowsPerPage={rowsPerPage}
					page={page}
					onPageChange={handleChangePage}
					onRowsPerPageChange={handleChangeRowsPerPage}
				/> */}
			</Paper>
		</Box>
	);
};

export default DataTable;
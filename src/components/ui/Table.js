import React from 'react';
import {
	TableContainer,
	Paper,
	TableRow,
	TableHead,
	Table,
	TableBody,
} from '@material-ui/core';
import { StyledTableCell } from './TableCell';
import CustomTableRow from './TableRow';

export default function TableContent({ products }) {
	return (
		<TableContainer component={Paper}>
			<Table>
				<TableHead>
					<TableRow>
						<StyledTableCell>Product</StyledTableCell>
						<StyledTableCell>Amount</StyledTableCell>
						<StyledTableCell>Description</StyledTableCell>
						<StyledTableCell>Active</StyledTableCell>
						<StyledTableCell>Actions</StyledTableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{products.map((p) => (
						<CustomTableRow
							key={p.id}
							product={p.name}
							amount="30%"
							description={p.description}
						/>
					))}
				</TableBody>
			</Table>
		</TableContainer>
	);
}

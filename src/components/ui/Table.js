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

export default function TableContent() {
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
					<CustomTableRow
						product="Pant"
						amount="30%"
						description="Flat 30% off on all pants"
					/>
					<CustomTableRow
						product="Shirt"
						amount="60%"
						description="Flat 60% off on all shirts"
					/>
					<CustomTableRow
						product="T-Shirt"
						amount="1 on 2"
						description="Buy 2 get 1 free"
					/>
				</TableBody>
			</Table>
		</TableContainer>
	);
}

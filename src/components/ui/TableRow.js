import React from 'react';
import { TableCell, TableRow, Switch } from '@material-ui/core';
import Actions from './Actions';

export default function CustomTableRow({ product, amount, description }) {
	return (
		<TableRow>
			<TableCell>{product}</TableCell>
			<TableCell>{amount}</TableCell>
			<TableCell>{description}</TableCell>
			<TableCell>
				<Switch color="primary" />
			</TableCell>
			<TableCell>
				<Actions />
			</TableCell>
		</TableRow>
	);
}

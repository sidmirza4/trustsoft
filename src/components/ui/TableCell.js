import { withStyles, TableCell } from '@material-ui/core';

export const StyledTableCell = withStyles((theme) => ({
	head: {
		backgroundColor: theme.palette.primary.main,
		color: theme.palette.common.white,
	},
	body: {
		fontSize: 16,
	},
}))(TableCell);

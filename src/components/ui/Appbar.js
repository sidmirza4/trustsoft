import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button } from '@material-ui/core';
import { useStyles } from '../../mui-theme/theme';
export default function Appbar() {
	const classes = useStyles();

	return (
		<AppBar>
			<Toolbar>
				<Typography variant="h6" className={classes.title}>
					Fashion Factory
				</Typography>

				<Button color="primary">
					<Link className={classes.link} to="/signin">
						Logout
					</Link>
				</Button>
			</Toolbar>
		</AppBar>
	);
}

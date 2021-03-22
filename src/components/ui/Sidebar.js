import React, { Fragment } from 'react';
import { List, ListItem, ListItemText, Divider } from '@material-ui/core';
import { useStyles } from '../../mui-theme/theme';

export default function SideBar() {
	const classes = useStyles();

	const sideItems = [
		'Home',
		'Offers',
		'Products',
		'Categories',
		'Profile',
		'Following',
		'Feedback',
	];
	return (
		<List className={classes.SideList} component="nav" aria-label="main">
			{sideItems.map((item) => (
				<Fragment key={item}>
					<ListItem button>
						<ListItemText primary={item} />
					</ListItem>
					<Divider />
				</Fragment>
			))}
		</List>
	);
}

import React, { useEffect, useState } from 'react';
import {
	Grid,
	Paper,
	Typography,
	Divider,
	Button,
	Box,
	Hidden,
} from '@material-ui/core';
import { useStyles } from '../mui-theme/theme';
import Appbar from './ui/Appbar';
import SideBar from './ui/Sidebar';
import TableContent from './ui/Table';
import { Redirect } from 'react-router';

export default function OfferDetails({ isAuthenticated, fetchProducts }) {
	const [products, setProducts] = useState([]);
	const classes = useStyles();
	if (!isAuthenticated) {
		return <Redirect to="/" />;
	}

	useEffect(() => {
		(async function loadContent() {
			const response = await fetchProducts();
			setProducts(
				response.data.products.map((p) => ({
					id: p.id,
					name: p.name,
					description: p.description,
				}))
			);
		})();
	}, [isAuthenticated]);

	return (
		<Grid container component="main" className={classes.root}>
			<Appbar />
			<Hidden smDown>
				<Grid
					component={Paper}
					elevation={3}
					className={classes.sidebar}
					item
					sm={false}
					md={2}
				>
					<SideBar />
				</Grid>
			</Hidden>
			<Grid className={classes.mainContent} item md={10} sm={12}>
				<Typography variant="h4" component="h1">
					Offer Details
				</Typography>
				<Divider className={classes.divider} />
				<Box mt={1} />
				<Button className={classes.submit} color="primary" variant="contained">
					ADD OFFER
				</Button>
				<TableContent products={products} />
			</Grid>
		</Grid>
	);
}

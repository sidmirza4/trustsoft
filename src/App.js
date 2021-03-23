import React, { useState } from 'react';
import axios from 'axios';
import './App.css';
import {
	Switch,
	withRouter,
	Route,
	Redirect,
	useHistory,
} from 'react-router-dom';
import SignInSide from './components/SignInSide';
import OfferDetails from './components/OfferDetails';

function App() {
	const history = useHistory();
	const [isAuthenticated, setIsAuthenticated] = useState(false);
	const [token, setToken] = useState(null);

	const loginHandler = async (email, password) => {
		const url = ' http://52.66.70.51:3000/storeadmin/login';
		const data = {
			handle: email,
			password,
		};
		const response = await axios.post(url, data);
		const userToken = response.data.token;
		setToken(userToken);
		setIsAuthenticated(true);
		history.push('/offer-details');
	};

	const fetchProductHandler = async () => {
		const url = 'http://52.66.70.51:3000/storeadmin/products';
		// if (!token) return history.replace('/');
		const response = await axios.get(url, {
			headers: {
				Authorization: `Bearer ${token}`,
			},
		});
		return response;
	};

	return (
		<div className="App">
			<Switch>
				<Route
					exact
					path="/offer-details"
					render={() => (
						<OfferDetails
							isAuthenticated={isAuthenticated}
							fetchProducts={fetchProductHandler}
						/>
					)}
				/>
				<Route
					exact
					path="/"
					render={() => <SignInSide onSubmit={loginHandler} />}
				/>
				<Redirect to="/" />
			</Switch>
		</div>
	);
}

export default withRouter(App);

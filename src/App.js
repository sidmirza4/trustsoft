import React from 'react';
import './App.css';
import { Switch, withRouter, Route, Redirect } from 'react-router-dom';
import SignInSide from './components/SignInSide';
import OfferDetails from './components/OfferDetails';

function App() {
	return (
		<div className="App">
			<Switch>
				<Route exact path="/signin" component={SignInSide} />
				<Route exact path="/" component={OfferDetails} />
				<Redirect to="/" />
			</Switch>
		</div>
	);
}

export default withRouter(App);

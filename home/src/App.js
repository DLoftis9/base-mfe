import React from 'react';
import { Switch, Route, Router } from 'react-router-dom';
import Home from './components/Home';
import Contact from './components/Contact';

export default ({ history }) => (
	<div className='app-home'>
		<Router history={history}>
			<Switch>
				<Route exact path='/contact' component={Contact} />
				<Route path='/' component={Home} />
			</Switch>
		</Router>
	</div>
);

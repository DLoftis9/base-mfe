import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Home from './components/Home';
import Contact from './components/Contact';

export default () => (
	<div className='home-app'>
		<h2>Home App</h2>
		<BrowserRouter>
			<Switch>
				<Route exact path='/contact' component={Contact} />
				<Route path='/' component={Home} />
			</Switch>
		</BrowserRouter>
	</div>
);

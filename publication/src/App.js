import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Publication from './components/Publication';
import Home from './components/Home';

export default () => (
	<div className='publication-app'>
		<h2>Publication App</h2>
		<BrowserRouter>
			<Switch>
				<Route exact path='/publication' component={Publication} />
				<Route path='/home' component={Home} />
			</Switch>
		</BrowserRouter>
	</div>
);

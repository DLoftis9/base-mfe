import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Home from './components/Home';
import Publication from './components/Publication';

export default () => (
	<div className='app'>
		<BrowserRouter>
			<Switch>
				<Route exact path='/publication/front' component={Publication} />
				<Route path='/' component={Home} />
			</Switch>
		</BrowserRouter>
	</div>
);

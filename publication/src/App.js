import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Publication from './components/Publication';

export default () => (
	<div className='app'>
		<BrowserRouter>
			<Switch>
				<Route exact path='/publication' component={Publication} />
			</Switch>
		</BrowserRouter>
	</div>
);

import React, { lazy, Suspense } from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
// import Home from './components/Home';
// import Publication from './components/Publication';

const HomeLazy = lazy(() => import('./components/Home'));
const PublicationLazy = lazy(() => import('./components/Publication'));

export default () => {
	return (
		// parent wrapper as BrowserRouter
		<div>
			<h2>Container App</h2>
			<BrowserRouter>
				<Suspense fallback={<div>Loading...</div>}>
					<Switch>
						<HomeLazy />
						<PublicationLazy />
					</Switch>
				</Suspense>
			</BrowserRouter>
		</div>
	);
};

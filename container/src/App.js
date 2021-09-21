import React from 'react';
import Home from './components/Home';
import Publication from './components/Publication';

// import react-router dom

export default () => {
	return (
		// parent wrapper as BrowserRouter
		<div>
			{/* wrap components in Switch */}
			<Home />
			<Publication />
			<p>Container App</p>
		</div>
	);
};

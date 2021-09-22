import React from 'react';
import { Link } from 'react-router-dom';

const Publication = () => (
	<div>
		<Link to='/'>
			<button style={{ backgroundColor: 'gray', color: 'black' }}>
				to: Home Page
			</button>
		</Link>
	</div>
);

export default Publication;

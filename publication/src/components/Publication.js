import React from 'react';
import { Link } from 'react-router-dom';

const Publication = () => (
	<div>
		Publication Page!
		<Link to='/home'>
			<button style={{ backgroundColor: 'gray', color: 'black' }}>
				Home Page
			</button>
		</Link>
	</div>
);

export default Publication;

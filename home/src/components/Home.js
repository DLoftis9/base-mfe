import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => (
	<div>
		<Link to='/contact'>
			<button style={{ backgroundColor: 'gray', color: 'black' }}>
				to: Contact Page
			</button>
		</Link>
	</div>
);

export default Home;

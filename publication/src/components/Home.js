import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => (
	<div>
		Home Page!
		<Link to='/home'>
			<button style={{ backgroundColor: 'gray', color: 'black' }}>
				Contact Page
			</button>
		</Link>
	</div>
);

export default Home;

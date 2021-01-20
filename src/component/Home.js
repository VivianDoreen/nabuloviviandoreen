import React from 'react';

import { useMenu } from './MenuContext';

const Home = () => {
	const menu = useMenu();
	return (
		<div className='content' style={{ width: '100% - 250px' }}>
			<div className='card' style={{ color: '#000000' }}>
				<div
					className='home'
					style={{ width: '80%', margin: '10% auto', fontWeight: '400', fontSize: 30, textAlign: 'center' }}
				>
					Hello, am <span>Vivian Doreen Nabulo</span>. Am Full Stack Web Developer, I want to make things that make a
					difference.
				</div>
			</div>
		</div>
	);
};
export default Home;

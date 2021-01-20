import React from 'react';

const Resume = () => {
	return (
		<div className='content'>
			<div className='card' style={{ color: '#000000' }}>
				<h1 style={{ margin: '30px' }}>Resume</h1>
				<div className='content-abt'>
					<p style={{ textAlign: 'center', background: 'none' }}>
						Kindly find my resume -
						<a
							style={{ color: 'green' }}
							target='_blank'
							href='https://docs.google.com/document/d/1xveJa8ZzeiL4wdyn3h1BYCN1nJkNcfLhtwMlhWx2lds/edit?usp=sharing'
						>
							Here
						</a>
					</p>
				</div>
			</div>
		</div>
	);
};
export default Resume;

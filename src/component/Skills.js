import React from 'react';

const Skills = () => {
	return (
		<div className='content'>
			<div className='card' style={{ color: '#000000' }}>
				<h1 style={{ margin: '30px' }}>Skills</h1>
				<h2> Things I Use And Love</h2>
				<div className='content-abt'>
					<p>
						<b>Languages</b> - Javascript (Reactjs), Python (Python Flask, USSD), Php
						(Codeigniter), C++
					</p>
					<p>
						<b>User Interface Design </b>- HTML5, CSS, Sass, Semantic UI React, Material UI, Bootstrap, Wordpress
					</p>
					<p>
						<b>Project Management Tools</b> - Azure Devops Server, Pivotal Tracker, Trello, Click Up,
					</p>
					<p>
						<b>Design tools </b>- Figma, Adobe XD, Adobe illustrator, Adobe photoshop
					</p>
					<p>
						<b>Continous integration</b> - Circle CI, Travis
					</p>
					<p>
						<b>API Testing tools - Postman</b>
					</p>
					<p>
						<b>Deployment</b> - Heroku, 
					</p>
					<p>
						<b>Other Skills</b> - Git, Redux Thunk / Sagas, Axios, Fetch, JSON
					</p>
				</div>
			</div>
		</div>
	);
};
export default Skills;

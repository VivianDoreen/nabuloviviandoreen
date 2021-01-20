import React from 'react';
import { ExternalLink } from 'react-external-link';
import { Link } from 'react-router-dom';
const Projects = () => {
	// const techkettle = window.location.href();
	return (
		// <div id='main-section'>
		<div className='content'>
			<div className='card' style={{ color: '#000000' }}>
				<h1 style={{ margin: '30px' }}>Projects</h1>
				<hr />

				<div className='content-abt'>
					<p>
						<ul>
							<li>
								<Link
									to={{ pathname: 'https://markets.akellobanker.com/en' }}
									target='_blank'
									style={{ color: 'green' }}
								>
									Akellobanker
								</Link>:- A mobile and web based system that helps low income earners like farmers to get agricultural
								inputs on credit
							</li>
							<li>
								<Link to={{ pathname: 'http://murobinvestment.com/' }} target='_blank' style={{ color: 'green' }}>
									Murob Investments
								</Link>:- Is a web-based platform that aims is to equip the local community with knowledge and skills in
								tailoring, embroidery, knitting and other skills
							</li>
							<li>
								<Link to={{ pathname: 'https://streamafrique.com/' }} target='_blank' style={{ color: 'green' }}>
									Stream Afrique (online streaming platform):-
								</Link>
								Web-based platform that allows users to watch videos online
							</li>
							<li>
								<a href='#' style={{ color: 'green' }}>
									Activo:-
								</a>
								An asset management system
							</li>
							<li>
								<a href='#' style={{ color: 'green' }}>
									Tsm-compliance system :-
								</a>
								System to track the performance of Technical Support Managers in Andela
							</li>
							<li>
								<a href='#' style={{ color: 'green' }}>
									The Green-mile application:-
								</a>
								I​s a company which specializes in door to door delivery of packages. Store Manager (​Helps store owners
								to manage sales and product inventory records.​
							</li>
							<li>
								<Link to={{ pathname: 'https://techkettle.herokuapp.com/' }} target='_blank' style={{ color: 'green' }}>
									TechKettle:-
								</Link>
								Is a software company that specializes in development of web apps, mobile apps, UI/UX design and more
							</li>
							<li>
								<a href='#' style={{ color: 'green' }}>
									Store Manager:-
								</a>
								​Helps store owners to manage sales and product inventory records.​
							</li>
						</ul>
					</p>
				</div>
			</div>
		</div>
	);
};
export default Projects;

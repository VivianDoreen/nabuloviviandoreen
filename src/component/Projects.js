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
								</Link>
								<p style={{margin:"0px 10px 30px", padding:'0px'}}>
									A mobile and web based system that helps low income earners like farmers to get agricultural
								inputs on credit
								</p>
							</li>
							<li>
								<Link to={{ pathname: 'https://pearlsafaris.com/' }} target='_blank' style={{ color: 'green' }}>
								PearlSafari
								</Link>
								<p style={{margin:"0px 10px 30px", padding:'0px'}}>Web based application that enables users to book online tickets, trips and destinations
							</p>
							</li>
							<li>
								<Link to={{ pathname: 'https://jamikujafreshfoods.com/' }} target='_blank' style={{ color: 'green' }}>
								Jamikuja Fresh Foods:-
								</Link>
								<p style={{margin:"0px 10px 30px", padding:'0px'}}>
									Export Ugandan Fresh Foods to London, UK!						
									</p>	</li>
							<li>
								<Link to={{ pathname: 'http://murobinvestment.com/' }} target='_blank' style={{ color: 'green' }}>
									Murob Investments
								</Link>
								<p style={{margin:"0px 10px 30px", padding:'0px'}}>Is a web-based platform that aims is to equip the local community with knowledge and skills in
								tailoring, embroidery, knitting and other skills
								</p>
							</li>
							<li>
								<Link to={{ pathname: 'https://techkettle-info.web.app/' }} target='_blank' style={{ color: 'green' }}>
									TechKettle
								</Link>
								<p style={{margin:"0px 10px 30px", padding:'0px'}}>Is a software company that specializes in development of web apps, mobile apps, UI/UX design and more
							</p>
							</li>
							<li>
								<Link to={{ pathname: 'https://www.figma.com/proto/ffSrQNIxNGCDTQhmIuO0a5/Untitled?page-id=0%3A1&node-id=74%3A53&starting-point-node-id=74%3A53' }} target='_blank' style={{ color: 'green' }}>
									Agribid Prototype - In progress
								</Link>
								<p style={{margin:"0px 10px 30px", padding:'0px'}}>Agribid is a web-based, mobile-based and USSD platform that connects farmers directly to the final consumer
							</p>
							</li>
						</ul>
					</p>
				</div>
			</div>
		</div>
	);
};
export default Projects;

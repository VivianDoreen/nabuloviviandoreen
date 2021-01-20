import React from 'react';

const About = () => {
	return (
		// <div className='content'>
		// 	<div className='card' style={{ color: '#000000' }}>
		<div className='content'>
			<div className='card' style={{ color: '#000000' }}>
				<h1>
					About Vivian <br />
				</h1>
				<h2> Producing high-quality websites and exceptional user experience</h2>
				<hr />
				<div className='content-abt'>
					{/* <h5>Hello!</h5> */}
					<p>
						Am a Full Stack Web Developer using majorly ReactJs and Flask. I have worked with Andela Uganda Limited,
						Quest digital finance and Tunga as a software developer. In my spare time I like to create and contribute to
						open source projects. That helps me to learn a lot of new stuff, grow as a developer and support other open
						source projects.
					</p>
					<p>
						I have commercial experience providing web development, producing high quality responsive websites and
						exceptional user experience. Clients often approach me when they need a developer who can provide:
						<ul>
							<li>Responsive HTML/CSS</li>
							<li>JavaScript (vanilla, React/Redux, jQuery, etc)</li>
							<li>High-level user experience</li>
							<li>Best practices </li>
							<li>Performance</li>
						</ul>
					</p>
					<p>
						I take great care to ensure each project is well-documented and easily maintainable so you can enhance a
						website as your company grows.
					</p>
				</div>
			</div>
		</div>
	);
};
export default About;

import React from 'react';

import menuIcon from '../assets/23.png';
import portifolio from '../assets/portifolio.jpeg';
import home from '../assets/19.png';
import about from '../assets/20.png';
import experience from '../assets/21.png';
import skills from '../assets/23.png';
import education from '../assets/23.png';
import contact from '../assets/09.jpeg';
import resume from '../assets/23.png';
import { useMenu } from './MenuContext';
import { useMenuUpdate } from './MenuContext';

import '../style/style.scss';
import '../style/responsive.scss';

function MobileNav() {
	const menuUpdate = useMenuUpdate();
	const menu = useMenu();
	return (
		<div>
			<div class='mobile-nav'>
				<div class='nav-bar'>
					<img src={portifolio} class='mobile-profile-img' alt='profile_pic' />
					<label for='check-mobile' onClick={menuUpdate}>
						<i id='sidebar-btn-mobile' class='fas fa-bars' />
					</label>
				</div>
			</div>
			<div class='mobile-nav-items' style={{ display: `${menu ? 'block' : 'none'}` }}>
				<a href='/'>
					{/* <img src={home} width='40px' height='40px' alt='dashboard' /> */}
					<i class='fa fa-home' aria-hidden='true' />
					<span>Home</span>
				</a>
				<a href='/about'>
					{/* <img src={about} width='40px' height='40px' alt='Components' /> */}
					<i class='fas fa-info-circle' />
					<span>About</span>
				</a>
				<a href='/experience'>
					{/* <img src={experience} width='40px' height='40px' alt='Tables' /> */}
					<i class='fa fa-history' aria-hidden='true' />
					<span>Experience</span>
				</a>
				<a href='/projects'>
					{/* <img src={experience} width='40px' height='40px' alt='Tables' /> */}
					<i class='fa fa-tasks' aria-hidden='true' />
					<span>Projects</span>
				</a>
				<a href='/skills'>
					{/* <img src={skills} width='40px' height='40px' alt='Forms' /> */}
					<i class='fas fa-brain fa-lg' />
					<span>Skills</span>
				</a>
				<a href='/education'>
					{/* <img src={education} width='40px' height='40px' alt='About' /> */}
					<i class='fa fa-university' aria-hidden='true' />
					<span>Education</span>
				</a>
				<a href='/contact'>
					{/* <img src={contact} width='40px' height='40px' alt='Settings' /> */}
					<i class='fa fa-address-book' aria-hidden='true' />
					<span>Contact</span>
				</a>
				<a href='/resume'>
					{/* <img src={resume} width='40px' height='40px' alt='Settings' /> */}
					<i class='fa fa-file' aria-hidden='true' />
					<span>Resume</span>
				</a>
			</div>
		</div>
	);
}

export default MobileNav;

import React from 'react';
import portifolio from '../assets/portifolio.jpeg';
import { useMenu } from './MenuContext';

function Sidebar() {
	const menu = useMenu();

	return (
		<div className='sidebar' style={{ marginLeft: `${menu ? '-185px' : '0px'}` }}>
			<div className='profile-info' style={{ display: `${menu ? 'none' : 'flex'}` }}>
				<img src={portifolio} className='profile-img' alt='profile_pic' />
				<h4>Nabulo Vivian Doreen</h4>
			</div>
			<hr style={{ display: `${menu ? 'none' : 'block'}` }} />
			<div className='menu'>
				<a style={{ marginLeft: `${menu ? '165px' : '0'}`, width: `${menu ? '100%' : '100%'}` }} href='/'>
					<i class='fa fa-home' aria-hidden='true' />
					<span style={{ display: `${menu ? 'none' : 'inline'}` }}>Home</span>
				</a>
				<a style={{ marginLeft: `${menu ? '165px' : '0'}`, width: `${menu ? '100%' : '100%'}` }} href='/about'>
					<i class='fas fa-info-circle' />
					<span style={{ display: `${menu ? 'none' : 'inline'}` }}>About</span>
				</a>
				<a style={{ marginLeft: `${menu ? '165px' : '0'}`, width: `${menu ? '100%' : '100%'}` }} href='/experience'>
					<i class='fa fa-history' aria-hidden='true' />
					<span style={{ display: `${menu ? 'none' : 'inline'}` }}>Experience</span>
				</a>
				<a style={{ marginLeft: `${menu ? '165px' : '0'}`, width: `${menu ? '100%' : '100%'}` }} href='/projects'>
					<i class='fa fa-tasks' aria-hidden='true' />
					<span style={{ display: `${menu ? 'none' : 'inline'}` }}>Projects</span>
				</a>
				<a style={{ marginLeft: `${menu ? '165px' : '0'}`, width: `${menu ? '100%' : '100%'}` }} href='/skills'>
					<i class='fas fa-brain fa-lg' />
					<span style={{ display: `${menu ? 'none' : 'inline'}` }}>Skills</span>
				</a>
				<a style={{ marginLeft: `${menu ? '165px' : '0'}`, width: `${menu ? '100%' : '100%'}` }} href='/education'>
					<i class='fa fa-university' aria-hidden='true' />
					<span style={{ display: `${menu ? 'none' : 'inline'}` }}>Education</span>
				</a>
				<a style={{ marginLeft: `${menu ? '165px' : '0'}`, width: `${menu ? '100%' : '100%'}` }} href='/contact'>
					<i class='fa fa-address-book' aria-hidden='true' />
					<span style={{ display: `${menu ? 'none' : 'inline'}` }}>Contact</span>
				</a>
				<a style={{ marginLeft: `${menu ? '165px' : '0'}`, width: `${menu ? '100%' : '100%'}` }} href='/resume'>
					<i class='fa fa-file' aria-hidden='true' />
					<span style={{ display: `${menu ? 'none' : 'inline'}` }}>Resume</span>
				</a>
			</div>
		</div>
	);
}

export default Sidebar;

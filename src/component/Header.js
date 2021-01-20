import React, { useState } from 'react';
import { useMenuUpdate } from './MenuContext';

import menuIcon from '../assets/23.png';

function Header() {
	const menuUpdate = useMenuUpdate();
	return (
		<div>
			<header>
				<label onClick={menuUpdate} for='check'>
					{/* <i id='sidebar-btn' class='fas fa-bars' /> */}
				</label>
				<div className='left-area'>
					<h3>
						Full Stack <span>Developer</span>
					</h3>
				</div>
			</header>
		</div>
	);
}

export default Header;

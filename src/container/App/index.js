//react
import React from 'react';

//third party libraries
import { HashRouter as Router, Route, Switch } from 'react-router-dom';

//scss
import '../../style/style.scss';
import '../../style/responsive.scss';

//components
import Header from '../../component/Header';
import Sidebar from '../../component/Sidebar';
import Home from '../../component/Home';
import About from '../../component/About';
import Contact from '../../component/Contact';
import Education from '../../component/Education';
import Experience from '../../component/Experience';
import Projects from '../../component/Projects';
import Resume from '../../component/Resume';
import Skills from '../../component/Skills';
import Background from '../../component/Background';
import MobileNav from '../../component/MobileNav';

import MenuContext from '../../component/MenuContext';

const App = () => {
	return (
		<React.Fragment>
			<div className='mainDiv'>
				<Router>
					<MenuContext>
						<Header />
						<Sidebar />
						<MobileNav />
						<Switch>
							<Route path='/' exact component={Home} />
							<Route path='/about' component={About} />
							<Route path='/experience' component={Experience} />
							<Route path='/projects' component={Projects} />
							<Route path='/skills' component={Skills} />
							<Route path='/education' component={Education} />
							<Route path='/contact' component={Contact} />
							<Route path='/resume' component={Resume} />
						</Switch>
					</MenuContext>
				</Router>
			</div>
		</React.Fragment>
	);
};

export default App;

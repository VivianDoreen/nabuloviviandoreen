//react
import React from "react";

//third party libraries
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//scss
import "../../style/components/generalLayout.scss";

//components
import About from "../../component/About";
import Contact from "../../component/Contact";
import Education from "../../component/Education";
import Experience from "../../component/Experience";
import Home from "../Home";
import Projects from "../../component/Projects";
import Resume from "../../component/Resume";
import SideMenuDetails from "../../component/SideMenuDetails";
import Skills from "../../component/Skills";

const App = () => {
  return (
    <React.Fragment>
      <div className="mainDiv">
        <Router>
          <SideMenuDetails />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about" component={About} />
            <Route path="/experience" component={Experience} />
            <Route path="/projects" component={Projects} />
            <Route path="/skills" component={Skills} />
            <Route path="/education" component={Education} />
            <Route path="/contact" component={Contact} />
            <Route path="/resume" component={Resume} />
          </Switch>
        </Router>
      </div>
    </React.Fragment>
  );
};

export default App;

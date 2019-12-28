import React, { Component } from "react";
import { Menu } from "semantic-ui-react";
import "../style/components/sideMenu.scss";

//image
import portifolio from "../assets/portifolio.jpeg";
// import '../assets'
export default class SideMenuDetails extends Component {
  state = { activeItem: "home" };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

    return (
      <div id="grid_side_menu">
        <div className="side_menu">
          <div className="profile_pic">
            <a href="/">
              <img src={portifolio}></img>
            </a>
          </div>
          <p className="profile_name">
            Nabulo Vivian Doreen <p className="role">Frontend developer</p>
          </p>
          <hr className="hline" />
          <nav className="navigation">
            <ul className="mainmenu">
              <li>
                <a href="/about">About</a>
              </li>
              <li>
                <a href="/experience">Experience</a>
              </li>
              <li>
                <a href="/projects">Projects</a>
                {/* <ul class="submenu">
                <li><a href="">Tops</a></li>
                <li><a href="">Bottoms</a></li>
                <li><a href="">Footwear</a></li>
              </ul> */}
              </li>
              <li>
                <a href="/skills">Skills</a>
              </li>
              <li>
                <a href="/education">Education</a>
              </li>
              <li>
                <a href="/contact">Contact</a>
              </li>
              <li>
                <a href="/resume">Resume</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    );
  }
}

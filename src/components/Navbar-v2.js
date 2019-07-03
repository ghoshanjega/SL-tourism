import React from "react";
import { Link } from "gatsby";
// import github from '../img/github-icon.svg'
import logo from "../img/logo.png";
import Navbarstyle from "./Navbar-v2.module.css";

const Navbar = class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
      navBarActiveClass: ""
    };
  }

  toggleHamburger = () => {
    // toggle the active boolean in the state
    this.setState(
      {
        active: !this.state.active
      },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly
        this.state.active
          ? this.setState({
              navBarActiveClass: "is-active"
            })
          : this.setState({
              navBarActiveClass: ""
            });
      }
    );
  };

  render() {
    return (
      <nav
        className="navbar is-transparent has-margin-bottom-40"
        role="navigation"
        aria-label="main-navigation"
      >
        <div className="navbar-brand">
          <Link to="/" className="navbar-item has-text-white" title="Logo">
            <div className="container" style={{ height: "100px" }}>
              <div className={Navbarstyle.ocean}>
                <div className={Navbarstyle.wave}></div>
                <div className={Navbarstyle.wave}></div>
              </div>
            </div>
            <img src={logo} alt="SL Tourism" style={{ maxWidth:'100%',height:'auto' }} />
            <h1 className="title" style={{color:'white'}}>SL Tourism</h1>
          </Link>
          {/* Hamburger menu */}
          <div
            className={`navbar-burger burger ${this.state.navBarActiveClass}`}
            data-target="navMenu"
            onClick={() => this.toggleHamburger()}
          >
            <span />
            <span />
            <span />
          </div>
        </div>
        <div
          id="navMenu"
          className={`navbar-menu ${this.state.navBarActiveClass}`}
        >
          <div className="navbar-start has-text-centered">
            <Link className="navbar-item" to="/tour">
            <button className="button is-medium">Tour</button>
            </Link>
            <Link className="navbar-item" to="/activity">
          <button className="button is-medium">Activity</button>
            </Link>
            <Link className="navbar-item" to="/blog">
            <button className="button is-medium">Blog</button>
            </Link>
            <Link className="navbar-item" to="/contact">
            <button className="button is-medium">Contact</button>
            </Link>
            <Link className="navbar-item" to="/contact/examples">
            <button className="button is-medium">Examples</button>
            </Link>
          </div>
          {/* <div className="navbar-end has-text-centered">
              <a
                className="navbar-item"
                href="https://github.com/netlify-templates/gatsby-starter-netlify-cms"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="icon">
                  <img src={github} alt="Github" />
                </span>
              </a>
            </div> */}
        </div>
      </nav>
    );
  }
};

export default Navbar;

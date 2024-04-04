import React from "react";

import logo from "../Resimler/logo.png";

const Navbar = () => {
  return (
    <section id="navbar" className="navbar">
      <div className="navbarDiv">
        <div id="navbarLogo">
          <img src={logo} />
        </div>
        <i className="fa fa-bars" id="hamburger" onclick="toggleHamburger()" />
        <div id="navbarButtonsDiv">
          <a href="#home" className="navbarButton">
            Home
          </a>
          <a href="#trainers" className="navbarButton">
            Trainer
          </a>
          <a href="#classes" className="navbarButton">
            Classes
          </a>
          <a href="#client" className="navbarButton">
            Review
          </a>
          <a href="#contact" className="navbarButton">
            Contact
          </a>
          <a href="#" className="navbarJoinUs">
            JOIN US
          </a>
        </div>
      </div>
    </section>
  );
};

export default Navbar;

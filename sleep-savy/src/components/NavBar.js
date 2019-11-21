import React from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo.png";

function NavBar() {
  return (
    <div className="navBar">
      <img src={logo} alt="logo" />
      <div className="links">
        <a href="https://ui.faziz6006.now.sh/" className="link">
          Home
        </a>
        <Link to="/sleep" className="link">
          Sleep Entries
        </Link>
        <Link to="/" className="link">
          Login
        </Link>
        <Link to="/registration" className="link">
          Registration
        </Link>
      </div>
    </div>
  );
}

export default NavBar;

import React from "react";
import logo from "../../materials/Logo.svg";
import "./nav.css";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div className="navbar__div">
      <img src={logo} alt="logo" className="navbar__logo" />
      <ul className="navbar__links">
        <li>
          <Link className="navbar__link" to="/">
            Home
          </Link>
        </li>
        <li>
          <Link className="navbar__link" to="/menu">
            Menu
          </Link>
        </li>
        <li>
          <Link className="navbar__link" to="/about">
            About
          </Link>
        </li>
        <li>
          <Link className="navbar__link" to="/reservations">
            Reservations
          </Link>
        </li>
        <li>
          <Link className="navbar__link" to="/orderonline">
            Order Online
          </Link>
        </li>
        <li>
          <Link className="navbar__link" to="/login">
            Login
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Nav;

import React from "react";
import logo from "./Logo.svg";

const Nav = () => {
  return (
    <>
      <img src={logo} alt="logo" />
      <ul>
        <li>Home</li>
        <li>Menu</li>
        <li>About</li>
        <li>Reservations</li>
        <li>Order Online</li>
        <li>Login</li>
      </ul>
    </>
  );
};

export default Nav;

import React from "react";
import footer_image from "./restaurantchefB.jpg";

const Footer = () => {
  return (
    <>
      <img src={footer_image} alt="footer_image" />
      <ul>
        <li>Home</li>
        <li>Menu</li>
        <li>About</li>
        <li>Reservations</li>
        <li>Order Online</li>
        <li>Login</li>
      </ul>
      <ul>
        <li>Chicago</li>
        <li>+90 123 456 78 90</li>
        <li>company@gmail.com</li>
      </ul>
      <ul>
        <li>Instagram</li>
        <li>Twitter</li>
        <li>Linkedin</li>
      </ul>
    </>
  );
};

export default Footer;

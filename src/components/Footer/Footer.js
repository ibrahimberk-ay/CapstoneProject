import React from "react";
import footer_image from "../../materials/restaurantchefB.jpg";
import "./footer.css";

const Footer = () => {
  return (
    <div className="footer__main">
      <img className="footer__img" src={footer_image} alt="footer_image" />
      <ul className="footer__table">
        <label className="footer__label">Doormat Navigation</label>
        <li>
          <a className="footer__link" href="#/home">
            Home
          </a>
        </li>
        <li>
          <a className="footer__link" href="#/menu">
            Menu
          </a>
        </li>
        <li>
          <a className="footer__link" href="#/about">
            About
          </a>
        </li>
        <li>
          <a className="footer__link" href="#/reservations">
            Reservations
          </a>
        </li>
        <li>
          <a className="footer__link" href="#/orderonline">
            Order Online
          </a>
        </li>
        <li>
          <a className="footer__link" href="#/login">
            Login
          </a>
        </li>
      </ul>
      <ul className="footer__table">
        <label className="footer__label">Contact</label>
        <li className="footer__address">Chicago</li>
        <li className="footer__address">+90 123 456 78 90</li>
        <li className="footer__address">company@gmail.com</li>
      </ul>
      <ul className="footer__table">
        <label className="footer__label">Social Media Links</label>
        <li>
          <a className="footer__link" href="#/instagram">
            Instagram
          </a>
        </li>
        <li>
          <a className="footer__link" href="#/twitter">
            Twitter
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Footer;

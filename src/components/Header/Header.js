import React from "react";
import Button from "../Button/Button";
import "./header.css";
import headerimage from "../../materials/restauranfood.jpg";

const Header = () => {
  return (
    <>
      <div className="header">
        <div className="header__main">
          <div className="header_col_1">
            <h1 className="header__heading">Little Lemon</h1>
            <h3 className="header__subheading">Chicago</h3>
            <p className="header__paragraph">
              In relation to the latter item, put this in the content block as a
              button, so that, once clicked, the user is brought to another page
              where they can carry this task out. To do this, add a grey
              background and populate the block.
            </p>
            <div className="header__button">
              <Button title="Book a table" link="/reservations" />
            </div>
          </div>
          <div className="header_col_2">
            <img
              src={headerimage}
              alt="header_image"
              className="header__image"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;

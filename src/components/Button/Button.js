import React from "react";
import "./button.css";
import { Link } from "react-router-dom";

const Button = (props) => {
  return (
    <>
      <div className="button__main" onClick={Link}>
        <Link className="button__title" to={props.link}>
          {props.title}
        </Link>
      </div>
    </>
  );
};

export default Button;

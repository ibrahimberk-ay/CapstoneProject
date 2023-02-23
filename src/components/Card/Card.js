import React from "react";
import "./card.css";

const Card = (props) => {
  return (
    <>
      <div className="card__main">
        <img className="card__img" src={props.image} alt="food_image" />
        <div className="card__description_row_1">
          <div className="card_row_1">
            <h2>{props.title}</h2>
          </div>
          <div className="card_row_2">
            <h3>${props.price}</h3>
          </div>
        </div>
        <div className="card__description_row_2">
          <p>{props.ingredients}</p>
        </div>
      </div>
    </>
  );
};

export default Card;

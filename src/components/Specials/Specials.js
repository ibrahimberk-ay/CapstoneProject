import React from "react";
import Button from "../Button/Button";
import Card from "../Card/Card";
import img1 from "../../materials/greek salad.jpg";
import img2 from "../../materials/lemon dessert.jpg";
import img3 from "../../materials/BRUS.png";
import "./specials.css";

const card_data = [
  {
    title: "Salad",
    ingredients:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit architecto molestias error ullam similique rem neque ipsa obcaecati inventore explicabo.",
    price: "12.99",
    image: img1,
  },
  {
    title: "Cheesecake",
    ingredients:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit architecto molestias error ullam similique rem neque ipsa obcaecati inventore explicabo.",
    price: "15.99",
    image: img2,
  },
  {
    title: "Tomato Bread",
    ingredients:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit architecto molestias error ullam similique rem neque ipsa obcaecati inventore explicabo.",
    price: "9.99",
    image: img3,
  },
];

const Specials = () => {
  return (
    <>
      <div className="specials_container">
        <div className="specials__row_1">
          <div>
            <h1 className="specials__title">Specials</h1>
          </div>
          <div>
            <Button title="Online Menu" link="/menu" />
          </div>
        </div>
        <div className="specials__row_2">
          {card_data.map((data) => {
            return (
              <div className="specials__card">
                <Card
                  title={data.title}
                  image={data.image}
                  price={data.price}
                  ingredients={data.ingredients}
                />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Specials;

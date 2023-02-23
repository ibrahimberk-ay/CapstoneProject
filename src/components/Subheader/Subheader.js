import React from "react";
import "./subheader.css";
import subheaderimage from "../../materials/Mario and Adrian A.jpg";

const Subheader = () => {
  return (
    <>
      <div className="subheader">
        <div className="subheader__main">
          <div className="subheader_col_1">
            <h1 className="subheader__heading">Little Lemon</h1>
            <h3 className="subheader__subheading">Chicago</h3>
            <p className="subheader__paragraph">
              In relation to the latter item, put this in the content block as a
              button, so that, once clicked, the user is brought to another page
              where they can carry this task out. To do this, add a grey
              background and populate the block.
            </p>
          </div>
          <div className="subheader_col_2">
            <img
              src={subheaderimage}
              alt="subheader_image"
              className="subheader__image"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Subheader;

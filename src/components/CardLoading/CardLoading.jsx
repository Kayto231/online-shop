import React from "react";
import "../../index.scss";

const CardLoading = () => {
  return (
    <div className="cardContainer">
      <div className="cardContent">
        <div className="cardPhoto" />
        <div className="cardDescription--1" />
        <div className="cardDescription--2" />

        <div className="cardPrice">
          <div className="price" />
          <div className="button" />
        </div>
      </div>
    </div>
  );
};

export default CardLoading;

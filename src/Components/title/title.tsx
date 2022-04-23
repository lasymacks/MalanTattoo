import React from "react";
import "./title.scss";

const Title = () => {
  return (
    <div className="title-container">
      <img
          className="title-container__img"
          src={require("./img/star.png")}
          alt="*"
        />
      <h1 className="title-container__title">MALAN</h1>
      <span className="title-container__background-title-text">tattoo</span>
    </div>
  );
};

export default Title;

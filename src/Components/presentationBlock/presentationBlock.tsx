import React from "react";
import Button from "../button";
import Title from "../title";
import Wrapper from "../wrapper";
import "./presentationBlock.scss";

const PresentationBlock = () => {
  return (
    <Wrapper>
      <Title />
      <div className="img-container">
        <div className="img-container__item img-container__item--first">
          <img src={require("./img/first.png")} alt="Broken" />
        </div>
        <div className="img-container__item img-container__item--second">
          <img src={require("./img/second.png")} alt="Broken" />
        </div>
        <div className="img-container__item img-container__item--third">
          <img
            className="img-container__item--img"
            src={require("./img/third.png")}
            alt="Broken"
          />
          <Button text="Записаться" />
        </div>
      </div>
    </Wrapper>
  );
};

export default PresentationBlock;

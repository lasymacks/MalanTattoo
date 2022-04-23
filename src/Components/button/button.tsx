import React from "react";
import "./button.scss";

interface IButton {
  text: string;
}

const Button = ({ text }: IButton) => {
  return (
    <div className="button-container">
      <button className="button-container__button">{text}</button>
      <div className="button-container__second-border"></div>
    </div>
  );
};

export default Button;

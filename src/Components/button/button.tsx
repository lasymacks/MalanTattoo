import React from "react";
import styled from "styled-components";

interface IButton {
  text: string;
}

const Button = ({ text }: IButton) => {
  const Container = styled.div`
    position: relative;
  `;
  const Button = styled.button`
    left: 0;
    top: 0;
    width: 279px;
    height: 77px;
    border-radius: 50%;
    background-color: #fff;
    color: #2235d1;
    border: 2px solid #000;
    font-weight: 500;
    font-size: 20px;
    line-height: 24px;
    cursor: pointer;
  `;
  const SecondBorder = styled.div`
    position: absolute;
    left: 0;
    top: 0;
    width: 275px;
    height: 73px;
    border: 2px solid #2235d1;
    border-radius: 50%;
    transform: rotate(-10deg);
    transition: transform 0.25s ease-in-out, outline 0.1s ease-in-out;
    cursor: pointer;
    &:hover {
      transform: rotate(0);
    }
    &:active {
      outline: 3px solid #2235d1;
    }
  `;

  return (
    <Container>
      <Button >{text}</Button>
      <SecondBorder></SecondBorder>
    </Container>
  );
};

export default Button;

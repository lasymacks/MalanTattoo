import React from "react";
import styled from "styled-components";
import { SynteticEvent } from "../../Pages/myWorks/myWorks";

interface IButton {
  text: string;
  style?: string;
  onClick: (e: SynteticEvent<HTMLDivElement>) => void;
}

const Button = ({ text, style, onClick }: IButton) => {
  const Container = styled.div`
    position: relative;
    ${style}
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
    z-index: 10;
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
      <Button>{text}</Button>
      <SecondBorder onClick={(e) => onClick(e)}></SecondBorder>
    </Container>
  );
};

export default Button;

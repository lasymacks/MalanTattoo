import React, { ReactNode, useEffect } from "react";
import styled, { CSSProperties } from "styled-components";
import { SynteticEvent } from "../../Pages/myWorks/myWorks";
import Button from "../button";

interface IModalWindow {
  children?: ReactNode;
  style?: CSSProperties;
  closeFunction: (e: SynteticEvent<HTMLDivElement>) => void;
}

const ModalWindow = ({ children, style, closeFunction }: IModalWindow) => {
  return (
    <Container onClick={(e) => closeFunction(e)}>
      <Window style={style}>
        <CloseCross onClick={(e) => closeFunction(e)}></CloseCross>
        {children}
      </Window>
    </Container>
  );
};

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 0;
`;
const Window = styled.div`
  position: relative;
`;
const CloseCross = styled.div`
  position: absolute;
  background-image: url(${require("./img/cross.png")});
  width: 32px;
  height: 32px;
  top: 20px;
  right: 20px;
  cursor: pointer;
  transition: transform 0.3s;

  &:hover {
    transform: scale(1.1);
  }
  &:active {
    transform: scale(1);
  }
`;

export default ModalWindow;

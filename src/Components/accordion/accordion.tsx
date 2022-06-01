import { motion } from "framer-motion";
import React, { ReactNode, useEffect, useState } from "react";
import styled from "styled-components";
import { CSSTransition, Transition } from "react-transition-group";

interface IAccordion {
  children: ReactNode;
  textTitle?: string;
}

const Accordion = ({ children, textTitle }: IAccordion) => {
  const [isActive, setIsActive] = useState(false);

  const AccordionContainerHandler = () => {
    setIsActive((prevState) => !prevState);
  };

  return (
    <AccordionContainer onClick={AccordionContainerHandler}>
      <AccordionContentWrapper>
        {textTitle}
        <CSSTransition in={isActive} timeout={300} classNames="rotate">
          {
            <AccordinButton>
              <svg
                width="42"
                height="41"
                viewBox="0 0 42 41"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <line
                  y1="-1.5"
                  x2="40.251"
                  y2="-1.5"
                  transform="matrix(1 0 0.000819435 1 1 21.4553)"
                  stroke="black"
                  stroke-opacity="0.7"
                  stroke-width="3"
                />
                <line
                  x1="21.5044"
                  y1="41"
                  x2="21.5044"
                  stroke="black"
                  stroke-opacity="0.7"
                  stroke-width="3"
                />
              </svg>
            </AccordinButton>
          }
        </CSSTransition>
      </AccordionContentWrapper>
      <CSSTransition
        in={isActive}
        timeout={300}
        unmountOnExit
        classNames="fade"
      >
        <AccordionChildItem>{children}</AccordionChildItem>
      </CSSTransition>
    </AccordionContainer>
  );
};

// Можешь выносить сюда, можешь в отдельный файл, но в теле компонента не прописывай,
// потому что при ререндере эти styled-компоненты заново создаются :) Вынеси это во всех остальных компонентах
const AccordionContainer = styled.div`
  border-bottom: 1px solid rgba(0, 0, 0, 0.5);
  margin-bottom: 18px;
  cursor: pointer;
`;

const AccordionContentWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-weight: 400;
  font-size: 36px;
  line-height: 44px;
  color: rgba(0, 0, 0, 0.7);
  margin: 0;
  padding: 18px 0;
`;

const AccordinButton = styled.button`
  border: none;
  background-color: transparent;
  width: 41px;
  height: 41px;
  cursor: pointer;
  transition: transform 0.3s;

  &.rotate-enter {
    transform: rotate(0);
  }

  &.rotate-enter-active {
    transform: rotate(45deg);
  }

  &.rotate-enter-done {
    transform: rotate(45deg);
  }

  &.rotate-exit {
    transform: rotate(45deg);
  }

  &.rotate-exit-active {
    transform: rotate(0);
  }
`;

const AccordionChildItem = styled.div`
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
  padding-bottom: 20px;
  transition: max-height 0.3s, opacity 0.3s ease-in-out;

  &.fade-enter {
    opacity: 0;
    max-height: 0px;
  }

  &.fade-enter-active {
    opacity: 1;
    max-height: 500px;
  }

  &.fade-exit {
    opacity: 1;
    max-height: 500px;
  }

  &.fade-exit-active {
    opacity: 0;
    max-height: 0px;
  }

  &.fade-exit-done {
    opacity: 0;
    max-height: 0px;
  }
`;

export default Accordion;

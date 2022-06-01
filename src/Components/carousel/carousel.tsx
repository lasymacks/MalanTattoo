import React, { ReactNode, useState } from "react";
import styled from "styled-components";

interface ICarousel {
  children: ReactNode[];
}

const Carousel = ({ children }: ICarousel) => {
  const [position, setPosition] = useState(0);
  const currentImages = children.slice(position, position + 3);

  const leftButtonHandler = () => {
    if (position !== 0) {
      return setPosition((prev) => (prev -= 1));
    }
  };
  const rightButtonHandler = () => {
    if (position + 4 <= children.length) {
      console.log(position + 4 <= children.length);
      return setPosition((prev) => (prev += 1));
    }
  };

  return (
    <Container>
      <CarouselContainer>
        {children.map((item, index) => {
          if (index === position) {
            return (
              <CarouselItem
                style={{
                  minWidth: 320,
                  maxHeight: 480,
                  transform: `translate(-${position * 470}px, 32px)`,
                }}
              >
                {item}
              </CarouselItem>
            );
          }
          if (index === position + 2) {
            return (
              <CarouselItem
                style={{
                  minWidth: 320,
                  maxHeight: 368,
                  transform: `translate(-${position * 470}px, 32px)`,
                }}
              >
                {item}
              </CarouselItem>
            );
          }
          return (
            <CarouselItem
              style={{ transform: `translate(-${position * 470}px)` }}
            >
              {item}
            </CarouselItem>
          );
        })}
      </CarouselContainer>
      <CarouselButtonLeft onClick={leftButtonHandler}>
        <ArrowImg src={require("./img/left.png")}></ArrowImg>
      </CarouselButtonLeft>
      <CarouselButtonRight onClick={rightButtonHandler}>
        <ArrowImg src={require("./img/right.png")}></ArrowImg>
      </CarouselButtonRight>
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  min-height: 568px;
`;
const CarouselContainer = styled.ul`
  display: flex;
  justify-content: space-between;
  align-content: flex-start;
  max-width: 1140px;
  max-height: 568px;
  padding: 0;
  overflow: hidden;
  position: relative;
`;
const CarouselItem = styled.li`
  min-width: 440px;
  max-height: 568px;
  overflow: hidden;
  margin-right: 30px;
  transition: max-height 0.4s, min-width 0.4s, transform 0.4s;

  &:last-child {
    margin-right: 0;
  }
`;
const CarouselButton = styled.button`
  position: absolute;
  top: 50%;
  background-color: transparent;
  border: none;
  cursor: pointer;
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.1);
  }
  &:active {
    transform: scale(1);
  }
`;
const CarouselButtonLeft = styled(CarouselButton)`
  left: -130px;
`;
const CarouselButtonRight = styled(CarouselButton)`
  right: -130px;
`;
const ArrowImg = styled.img`
  object-fit: contain;
  object-position: center;
`;

export default Carousel;

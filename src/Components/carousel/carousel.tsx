import React, { ReactNode, useState } from "react";
import styled from "styled-components";

interface ICarousel {
  children: ReactNode[];
}

const Carousel = ({ children }: ICarousel) => {
  const [position, setPosition] = useState(0);
  const currentImages = children.slice(position, position + 3);

  const Container = styled.div`
    position: relative;
    min-height: 568px;
  `;
  const CarouselContainer = styled.ul`
    display: flex;
    justify-content: space-between;
    align-content: flex-start;
    max-width: 1140px;
    padding: 0;
    overflow: hidden;
    // flex-wrap: wrap;
  `;
  const CarouselItem = styled.li`
    min-width: 440px;
    height: 568px;
    overflow: hidden;
    margin-right: 30px;

    &:first-child {
      left: ${position};
    }
    &:nth-child(odd) {
      padding-top: 32px;
    }
    &:nth-child(1) {
      min-width: 320px;
      height: 480px;
    }
    &:nth-child(3) {
      min-width: 320px;
      height: 368px;
      margin-right: 0;
    }
  `;
  const CarouselButton = styled.button`
    position: absolute;
    top: 50%;
    background-color: transparent;
    border: none;
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

  const leftButtonHandler = () => {
    if (position !== 0) {
      return setPosition((prev) => prev -= 1);
    }
  };
  const rightButtonHandler = () => {
    if ((position + 4) <= children.length) {
      console.log((position + 4) <= children.length);
      return setPosition((prev) => (prev += 1));
    }
  };

  return (
    <Container>
      <CarouselContainer>
        {currentImages.map((item) => {
          return <CarouselItem>{item}</CarouselItem>;
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

export default Carousel;

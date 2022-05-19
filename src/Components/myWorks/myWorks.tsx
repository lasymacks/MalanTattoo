import React, { useState } from "react";
import Subtitle from "../subtitle";
import styled from "styled-components";
import { motion } from "framer-motion";
import Carousel from "../carousel";
import Wrapper from "../wrapper";

interface SynteticEvent<T> {
  currentTarget: EventTarget & T;
}

interface IActiveButtons {
  tattoos: boolean;
  healedTattoos: boolean;
  scetches: boolean;
}

const MyWorks = () => {
  const [activeButtons, setActiveButtons] = useState<IActiveButtons>({
    tattoos: true,
    healedTattoos: false,
    scetches: false,
  });
  const tattoosArray = [
    "./tattoos/img1.jpeg",
    "./tattoos/img2.jpeg",
    "./tattoos/img3.jpeg",
    "./tattoos/img4.jpeg",
    "./tattoos/img5.jpeg",
    "./tattoos/img6.jpeg",
  ];
  const healedTattoosArray = [
    "./healedTattoos/img1.jpeg",
    "./healedTattoos/img2.jpeg",
    "./healedTattoos/img3.jpeg",
    "./healedTattoos/img4.jpeg",
    "./healedTattoos/img5.jpeg",
    "./healedTattoos/img6.jpeg",
  ];
  const scetchesArray = [
    "./scetches/img1.jpeg",
    "./scetches/img2.jpeg",
    "./scetches/img3.jpeg",
    "./scetches/img4.jpeg",
    "./scetches/img5.jpeg",
    "./scetches/img6.jpeg",
  ];

  const BlueText = styled.span`
    overflow: hidden;
    font-weight: 400;
    font-size: 96px;
    line-height: 102px;
    color: #2235d1;
    text-shadow: none;
  `;
  const IndentedWord = styled.span`
    display: inline-block;
    margin-left: 30px;
  `;
  const Container = styled.div`
    display: flex;
    justify-content: center;
  `;
  const List = styled.ul`
    list-style: none;
    display: flex;
  `;
  const Item = styled.li`
    margin-right: 30px;
    &:last-child {
      margin-right: 0;
    }
  `;
  const ListButton = styled.button`
    font-weight: 400;
    font-size: 36px;
    line-height: 44px;
    border: none;
    background-color: #fff;
    color: rgba(0, 0, 0, 0.5);
    &:hover {
      cursor: pointer;
    }
    &:active {
      color: red;
    }
  `;
  const ListButtonActive = styled(ListButton)`
    color: #2235d1;
  `;
  const CarouselImg = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  `;

  const buttonHandler = (event: SynteticEvent<HTMLButtonElement>) => {
    const textContent = event.currentTarget.textContent;
    switch (textContent) {
      case "Тату":
        setActiveButtons((prev) => ({
          ...prev,
          tattoos: true,
          healedTattoos: false,
          scetches: false,
        }));
        break;

      case "Зажившие тату":
        setActiveButtons((prev) => ({
          ...prev,
          tattoos: false,
          healedTattoos: true,
          scetches: false,
        }));
        break;

      case "Эскизы":
        setActiveButtons((prev) => ({
          ...prev,
          tattoos: false,
          healedTattoos: false,
          scetches: true,
        }));
        break;

      default:
        break;
    }
  };

  const showCarouselContant = () => {
    if (activeButtons.tattoos) {
      return tattoosArray.map((item) => (
        <CarouselImg src={require(`${item}`)}></CarouselImg>
      ));
    }
    if (activeButtons.healedTattoos) {
      return healedTattoosArray.map((item) => (
        <CarouselImg src={require(`${item}`)}></CarouselImg>
      ));
    }
    if (activeButtons.scetches) {
      return scetchesArray.map((item) => (
        <CarouselImg src={require(`${item}`)}></CarouselImg>
      ));
    }
    return [];
  };

  return (
    <motion.div
      initial={{ y: 500, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ ease: "easeOut", duration: 1 }}
      viewport={{ once: true }}
    >
      <Subtitle>
        <IndentedWord>MY WORKS</IndentedWord> <BlueText>MY WORKS</BlueText> MY
        <BlueText> WORKS</BlueText> MY WORKS MY WOR
      </Subtitle>
      <Wrapper style={'margin-bottom: 85px'}>
        <Container>
          <List>
            <Item>
              {activeButtons.tattoos ? (
                <ListButtonActive onClick={(e) => buttonHandler(e)}>
                  Тату
                </ListButtonActive>
              ) : (
                <ListButton onClick={(e) => buttonHandler(e)}>Тату</ListButton>
              )}
            </Item>
            <Item>
              <img src={require("./img/star.png")}></img>
            </Item>
            <Item>
              {activeButtons.healedTattoos ? (
                <ListButtonActive onClick={(e) => buttonHandler(e)}>
                  Зажившие тату
                </ListButtonActive>
              ) : (
                <ListButton onClick={(e) => buttonHandler(e)}>
                  Зажившие тату
                </ListButton>
              )}
            </Item>
            <Item>
              <img src={require("./img/star.png")}></img>
            </Item>
            <Item>
              {activeButtons.scetches ? (
                <ListButtonActive onClick={(e) => buttonHandler(e)}>
                  Эскизы
                </ListButtonActive>
              ) : (
                <ListButton onClick={(e) => buttonHandler(e)}>
                  Эскизы
                </ListButton>
              )}
            </Item>
          </List>
        </Container>
        <Carousel>
          {showCarouselContant()}
        </Carousel>
      </Wrapper>
    </motion.div>
  );
};

export default MyWorks;

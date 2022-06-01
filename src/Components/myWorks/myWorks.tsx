import React, { useState } from "react";
import Subtitle from "../subtitle";
import styled from "styled-components";
import { motion } from "framer-motion";
import Carousel from "../carousel";
import Wrapper from "../wrapper";

interface SynteticEvent<T> {
  currentTarget: EventTarget & T;
}

const MyWorks = () => {
  const [activeButtons, setActiveButtons] = useState([
    {
      value: true,
      name: "Тату",
    },
    {
      value: false,
      name: "Зажившие тату",
    },
    {
      value: false,
      name: "Эскизы",
    },
  ]);
  const images = [
    {
      label: "Тату",
      links: [
        "./tattoos/img1.jpeg",
        "./tattoos/img2.jpeg",
        "./tattoos/img3.jpeg",
        "./tattoos/img4.jpeg",
        "./tattoos/img5.jpeg",
        "./tattoos/img6.jpeg",
      ],
    },
    {
      label: "Зажившие тату",
      links: [
        "./healedTattoos/img1.jpeg",
        "./healedTattoos/img2.jpeg",
        "./healedTattoos/img3.jpeg",
        "./healedTattoos/img4.jpeg",
        "./healedTattoos/img5.jpeg",
        "./healedTattoos/img6.jpeg",
      ],
    },
    {
      label: "Эскизы",
      links: [
        "./scetches/img1.jpeg",
        "./scetches/img2.jpeg",
        "./scetches/img3.jpeg",
        "./scetches/img4.jpeg",
        "./scetches/img5.jpeg",
        "./scetches/img6.jpeg",
      ],
    },
  ];

  const buttonHandler = (event: SynteticEvent<HTMLButtonElement>) => {
    const textContent = event.currentTarget.textContent;
    setActiveButtons((prev) => {
      const state = prev.map((item) =>
        item.name === textContent
          ? { ...item, value: true }
          : { ...item, value: false }
      );
      return state;
    });
  };

  const showCarouselContent = () => {
    const activeButton = activeButtons.reduce((acc, { value, name }) => {
      if (value) {
        acc = name;
      }
      return acc;
    }, "");
    const currentImages = images.reduce((acc, { label, links }) => {
      if (label === activeButton) {
        acc = [...links];
      }
      return acc;
    }, [] as string[]);
    console.log(activeButton, currentImages);
    return currentImages.map((item) => (
      <CarouselImg src={require(`${item}`)}></CarouselImg>
    ));
  };

  return (
    <motion.div
      initial={{ y: 500, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ ease: "easeOut", duration: 0.7 }}
      viewport={{ once: true }}
    >
      <Subtitle>
        <IndentedWord>MY WORKS</IndentedWord> <BlueText>MY WORKS</BlueText> MY
        <BlueText> WORKS</BlueText> MY WORKS MY WOR
      </Subtitle>
      <Wrapper style={"margin-bottom: 85px"}>
        <Container>
          <List>
            {activeButtons.map(({ value, name }, index) => (
              <>
                <Item>
                  {value ? (
                    <ListButtonActive onClick={(e) => buttonHandler(e)}>
                      {name}
                    </ListButtonActive>
                  ) : (
                    <ListButton onClick={(e) => buttonHandler(e)}>
                      {name}
                    </ListButton>
                  )}
                </Item>
                {activeButtons.length > index + 1 && (
                  <Item>
                    <img src={require("./img/star.png")}></img>
                  </Item>
                )}
              </>
            ))}
          </List>
        </Container>
        <Carousel>{showCarouselContent()}</Carousel>
      </Wrapper>
    </motion.div>
  );
};

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

export default MyWorks;

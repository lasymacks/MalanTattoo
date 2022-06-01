import { motion } from "framer-motion";
import React, { useState } from "react";
import styled from "styled-components";
import Consultation from "../consultation";
import Correction from "../correction";
import DesignDevelopment from "../designDevelopment";
import Session from "../session";
import Subtitle from "../subtitle";
import Wrapper from "../wrapper";

interface SynteticEvent<T> {
  currentTarget: EventTarget & T;
}

const Workflow = () => {
  const [activeButtons, setActiveButtons] = useState([
    {
      value: true,
      name: "Консультация",
    },
    {
      value: false,
      name: "Разработка эскиза",
    },
    {
      value: false,
      name: "Коррекция",
    },
    {
      value: false,
      name: "Сеанс",
    },
    {
      value: false,
      name: "Место",
    },
  ]);

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

  const showContent = () => {
    const activeButton = activeButtons.reduce((acc, { value, name }) => {
      if (value) {
        acc = name;
      }
      return acc;
    }, "");
    switch (activeButton) {
      case "Консультация":
        return <Consultation />;

      case "Разработка эскиза":
        return <DesignDevelopment />;

      case "Коррекция":
        return <Correction />;

      case "Сеанс":
        return <Session />;

      default:
        return [];
    }
  };

  return (
    <motion.div
      initial={{ y: 500, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ ease: "easeOut", duration: 0.7 }}
      viewport={{ once: true }}
    >
      <Subtitle>
        <IndentedWord>WORKFLOW</IndentedWord> <BlueText>WORKFLOW</BlueText> W
        <BlueText> ORKFLOW</BlueText> WORKFLOW WO
      </Subtitle>
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
      <Wrapper style={"margin-bottom: 85px"}>{showContent()}</Wrapper>
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
  margin-bottom: 50px;
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

export default Workflow;
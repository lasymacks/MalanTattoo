import React from "react";
import Subtitle from "../subtitle";
import styled from "styled-components";
import { motion } from "framer-motion";

const MyWorks = () => {
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
    padding-bottom: 500px;
  `;
  const List = styled.ul`
    list-style: none;
    display: flex;
  `;
  const Item = styled.li`
    margin-right: 30px;
    $:last-child {
      margin-right: 0;
    }
  `;
  const ListButton = styled.button`
    font-weight: 400;
    font-size: 36px;
    line-height: 44px;
    border: none;
    background-color: #fff;
    $:hover {
      cursor: pointer;
      color: #2235d1;
    }
    $:active {
      color: red;
    }
  `;
  const ListImg = styled.img``;

  return (
    <motion.div
      initial={{ y: 500, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ ease: "easeOut", duration: 1 }}
    >
      <Subtitle>
        <IndentedWord>MY WORKS</IndentedWord> <BlueText>MY WORKS</BlueText> MY{" "}
        <BlueText>WORKS</BlueText> MY WORKS MY WOR
      </Subtitle>
      <Container>
        <List>
          <Item>
            <ListButton>Тату</ListButton>
          </Item>
          <Item>
            <ListImg src={require("./img/star.png")}></ListImg>
          </Item>
          <Item>
            <ListButton>Зажившие тату</ListButton>
          </Item>
          <Item>
            <ListImg src={require("./img/star.png")}></ListImg>
          </Item>
          <Item>
            <ListButton>Эскизы</ListButton>
          </Item>
        </List>
      </Container>
    </motion.div>
  );
};

export default MyWorks;

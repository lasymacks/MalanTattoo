import React from "react";
import styled, { keyframes } from "styled-components";
import Button from "../button";
import Title from "../title";
import Wrapper from "../wrapper";
import { motion } from "framer-motion";

const PresentationBlock = () => {
  const firstAnimation = keyframes`
  from {
    opacity: 0;
    position: relative;
    left: -500px;
  }
  to {
    position: relative;
    opacity: 1;
    left: 0;
  }
  `;
  const secondAnimation = keyframes`
  from {
    opacity: 0;
    position: relative;
    bottom: -500px;
  }
  to {
    position: relative;
    opacity: 1;
    bottom: 0;
  }
  `;
  const thirdAnimation = keyframes`
  from {
    opacity: 0;
    position: relative;
    right: -500px;
  }
  to {
    position: relative;
    opacity: 1;
    right: 0;
  }
  `;

  const Container = styled.div`
    display: flex;
    margin-bottom: 150px;
    overflow: hidden;
    position: relative;
  `;
  const ImgItem = styled.div`
    margin-right: 30px;
    &:last-child {
      margin-right: 0;
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  `;
  const LastImg = styled.img`
    margin-bottom: 55px;
  `;
  return (
    <motion.div
      initial={{ y: 500, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ ease: "easeOut", duration: 1 }}
      viewport={{ once: true }}
    >
      <Wrapper>
        <Title />
        <Container className="img-container">
          <ImgItem className="img-container__item img-container__item--first">
            <img src={require("./img/first.png")} alt="Broken" />
          </ImgItem>
          <ImgItem className="img-container__item img-container__item--second">
            <img src={require("./img/second.png")} alt="Broken" />
          </ImgItem>
          <ImgItem className="img-container__item img-container__item--third">
            <LastImg
              className="img-container__item--img"
              src={require("./img/third.png")}
              alt="Broken"
            />
            <Button text="Записаться" />
          </ImgItem>
        </Container>
      </Wrapper>
    </motion.div>
  );
};

export default PresentationBlock;

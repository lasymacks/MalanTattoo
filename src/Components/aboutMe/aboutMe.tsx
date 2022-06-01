import React from "react";
import styled from "styled-components";
import Subtitle from "../subtitle";
import Wrapper from "../wrapper";
import { motion } from "framer-motion";

const AboutMe = () => {
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
    font-weight: 400;
    font-size: 20px;
    line-height: 24px;
    display: flex;
    position: relative;
    margin-bottom: 200px;
  `;
  const Img = styled.img`
    margin-right: 35px;
  `;
  const BackgroundImg = styled.img `
    position: absolute;
    z-index: -1;
    left: -145px;
    bottom: -160px;
  `;

  return (
    <motion.div
      initial={{ y: 500, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ ease: "easeOut", duration: 0.7 }}
      viewport={{ once: true }}
    >
      <Subtitle>
        <IndentedWord>ABOUT ME</IndentedWord> ABOUT ME ABO UT ME{" "}
        <BlueText>ABOUT ME</BlueText> ABOUT ME
      </Subtitle>
      <Wrapper>
        <Container>
          <Img src={require("./img/myPhoto.png")}></Img>
          <div>
            <p>Привет, я Полина, твой тату-мастер.</p>
            <p>
              Мой опыт в создании тату - 3 года. Я работаю в уютной и комфортной
              студии у метро Обводный канал.
            </p>
            <p>Мои работы - маленькие украшения на всю жизнь.</p>
            <p>
              Я с большой любовью сделаю иллюстрацию на вашем теле, надпись
              своим почерком или шрифтом Брайля.
            </p>
            <p>
              Для своих тату я выбираю черный пигмент и грейвош, исключением
              могут стать красный и синий.
            </p>
            <p>Я не повторяю свои эскизы и не делаю копии чужих работ.</p>
            <p>
              Всегда смогу по референсам создать эскиз, в котором будут отражены
              мой стиль и частичка вас.
            </p>
          </div>
          <BackgroundImg src={require("./img/background.png")}></BackgroundImg>
        </Container>
      </Wrapper>
    </motion.div>
  );
};

export default AboutMe;

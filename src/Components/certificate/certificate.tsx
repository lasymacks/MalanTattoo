import React from "react";
import Subtitle from "../subtitle";
import Wrapper from "../wrapper";
import styled from "styled-components";
import { motion } from "framer-motion";

const Certificate = () => {
  return (
    <motion.div
      initial={{ y: 500, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ ease: "easeOut", duration: 0.6 }}
      viewport={{ once: true }}
    >
      <CertificateContainer>
        <Subtitle style={"padding-top: 32px; text-shadow: none;"}>
          <WhiteIndentedText>CERTIFICATE</WhiteIndentedText>{" "}
          <TransparentText>CERTIFICATE C</TransparentText>
          <TransparentText> CERTIFICATE CERTIFICATE</TransparentText>{" "}
          <WhiteText>CE</WhiteText>
        </Subtitle>
        <Wrapper>
          <CertificateBody>
            <TextWrapper>
              <p>Привет, я Полина, твой тату-мастер.</p>
              <p>
                Мой опыт в создании тату - 3 года. Я работаю в уютной и
                комфортной студии у метро Обводный канал.
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
                Всегда смогу по референсам создать эскиз, в котором будут
                отражены мой стиль и частичка вас.
              </p>
            </TextWrapper>
            <BuyButton>Купить</BuyButton>
          </CertificateBody>
        </Wrapper>
      </CertificateContainer>
    </motion.div>
  );
};

const WhiteText = styled.span`
  overflow: hidden;
  font-weight: 400;
  font-size: 96px;
  line-height: 102px;
  color: #fff;
  text-shadow: none;
`;
const WhiteIndentedText = styled.span`
  display: inline-block;
  margin-left: 30px;
`;
const TransparentText = styled.span`
  -webkit-text-fill-color: transparent;
  -webkit-text-stroke: 1px white;
`;
const CertificateContainer = styled.div`
  background-image: url(${require("./img/background.png")});
  background-size: contain;
  background-position: center;
  width: 1440px;
  height: 914px;
`;
const TextWrapper = styled.div`
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  color: #fff;
  max-width: 680px;
`;
const CertificateBody = styled.div`
  display: flex;
  justify-content: space-between;
`;
const BuyButton = styled.button`
  min-width: 340px;
  min-height: 340px;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  border: none;
  background-color: transparent;
  color: #fff;
  background-image: url(${require("./img/buttonBackground.png")});
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  transition: color 0.2s ease-in-out, transform 0.2s ease-in-out;

  &:hover {
    transform: scale(1.03);
  }
  &:active {
    transform: scale(1);
  }
`;

export default Certificate;

import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";
import Accordion from "../accordion/accordion";
import Subtitle from "../subtitle";
import Wrapper from "../wrapper";

const Price = () => {
  const BlueText = styled.span`
    overflow: hidden;
    font-weight: 400;
    font-size: 96px;
    line-height: 102px;
    color: #2235d1;
    text-shadow: none;
  `;
  const IndentedBlueWord = styled(BlueText)`
    margin-left: 30px;
  `;
  const PriceItemSubtittle = styled.h3`
    font-weight: 400;
    font-size: 36px;
    line-height: 44px;
    color: rgba(0, 0, 0, 0.7);
    margin: 0;
    padding: 18px 0;
  `;

  return (
    <motion.div
      initial={{ y: 500, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ ease: "easeOut", duration: 1 }}
      viewport={{ once: true }}
    >
      <Subtitle>
        <IndentedBlueWord>PRICE</IndentedBlueWord> PRICE PRICE PRICE P ICE PRICE{" "}
        <BlueText>PRICE</BlueText> PRICE PRIC
      </Subtitle>
      <Wrapper style={"margin-bottom: 150px; padding-bottom: 500px;"}>
        <Accordion>
          <PriceItemSubtittle>Консультация</PriceItemSubtittle>
        </Accordion>
        <Accordion>
          <PriceItemSubtittle>
            Разработка индивидуального эскиза
          </PriceItemSubtittle>
        </Accordion>
        <Accordion>
          <PriceItemSubtittle>Коррекция моей работы</PriceItemSubtittle>
        </Accordion>
        <Accordion>
          <PriceItemSubtittle>Тату</PriceItemSubtittle>
        </Accordion>
        <Accordion>
          <PriceItemSubtittle>Подарочный сертификат</PriceItemSubtittle>
        </Accordion>
      </Wrapper>
    </motion.div>
  );
};

export default Price;

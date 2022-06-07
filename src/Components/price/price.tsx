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

  return (
    <motion.div
      initial={{ y: 500, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ ease: "easeOut", duration: 0.6 }}
      viewport={{ once: true }}
    >
      <Subtitle>
        <IndentedBlueWord>PRICE</IndentedBlueWord> PRICE PRICE PRICE P ICE PRICE{" "}
        <BlueText>PRICE</BlueText> PRICE PRIC
      </Subtitle>
      <Wrapper style={"margin-bottom: 150px; padding-bottom: 500px;"}>
        <Accordion textTitle="Консультация">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
          exercitationem deserunt beatae in minima sapiente illo eos sed
          cupiditate reprehenderit saepe perspiciatis nam doloremque blanditiis,
          libero reiciendis facilis omnis. Voluptatum. Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Consectetur exercitationem deserunt
          beatae in minima sapiente illo eos sed cupiditate reprehenderit saepe
          perspiciatis nam doloremque blanditiis, libero reiciendis facilis
          omnis. Voluptatum. Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Consectetur exercitationem deserunt beatae in minima sapiente
          illo eos sed cupiditate reprehenderit saepe perspiciatis nam
          doloremque blanditiis, libero reiciendis facilis omnis. Voluptatum.
        </Accordion>
        <Accordion textTitle="Разработка индивидуального эскиза">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
          exercitationem deserunt beatae in minima sapiente illo eos sed
          cupiditate reprehenderit saepe perspiciatis nam doloremque blanditiis,
          libero reiciendis facilis omnis. Voluptatum. Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Consectetur exercitationem deserunt
          beatae in minima sapiente illo eos sed cupiditate reprehenderit saepe
          perspiciatis nam doloremque blanditiis, libero reiciendis facilis
          omnis. Voluptatum. Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Consectetur exercitationem deserunt beatae in minima sapiente
          illo eos sed cupiditate reprehenderit saepe perspiciatis nam
          doloremque blanditiis, libero reiciendis facilis omnis. Voluptatum.
        </Accordion>
        <Accordion textTitle="Коррекция моей работы">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
          exercitationem deserunt beatae in minima sapiente illo eos sed
          cupiditate reprehenderit saepe perspiciatis nam doloremque blanditiis,
          libero reiciendis facilis omnis. Voluptatum. Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Consectetur exercitationem deserunt
          beatae in minima sapiente illo eos sed cupiditate reprehenderit saepe
          perspiciatis nam doloremque blanditiis, libero reiciendis facilis
          omnis. Voluptatum. Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Consectetur exercitationem deserunt beatae in minima sapiente
          illo eos sed cupiditate reprehenderit saepe perspiciatis nam
          doloremque blanditiis, libero reiciendis facilis omnis. Voluptatum.
        </Accordion>
        <Accordion textTitle="Тату">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
          exercitationem deserunt beatae in minima sapiente illo eos sed
          cupiditate reprehenderit saepe perspiciatis nam doloremque blanditiis,
          libero reiciendis facilis omnis. Voluptatum. Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Consectetur exercitationem deserunt
          beatae in minima sapiente illo eos sed cupiditate reprehenderit saepe
          perspiciatis nam doloremque blanditiis, libero reiciendis facilis
          omnis. Voluptatum. Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Consectetur exercitationem deserunt beatae in minima sapiente
          illo eos sed cupiditate reprehenderit saepe perspiciatis nam
          doloremque blanditiis, libero reiciendis facilis omnis. Voluptatum.
        </Accordion>
        <Accordion textTitle="Подарочный сертификат">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
          exercitationem deserunt beatae in minima sapiente illo eos sed
          cupiditate reprehenderit saepe perspiciatis nam doloremque blanditiis,
          libero reiciendis facilis omnis. Voluptatum. Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Consectetur exercitationem deserunt
          beatae in minima sapiente illo eos sed cupiditate reprehenderit saepe
          perspiciatis nam doloremque blanditiis, libero reiciendis facilis
          omnis. Voluptatum. Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Consectetur exercitationem deserunt beatae in minima sapiente
          illo eos sed cupiditate reprehenderit saepe perspiciatis nam
          doloremque blanditiis, libero reiciendis facilis omnis. Voluptatum.
        </Accordion>
      </Wrapper>
    </motion.div>
  );
};

export default Price;

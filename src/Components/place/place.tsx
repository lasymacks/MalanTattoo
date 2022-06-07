import React from "react";
import styled from "styled-components";

const Place = () => {
  return (
    <Container>
      <ImgContaner>
        <Image src={require("./img/img1.png")} alt="Broken :("></Image>
        <Image src={require("./img/img2.png")} alt="Broken :("></Image>
      </ImgContaner>
      <div>
        <Subtitle>Рабочее место.</Subtitle>
        <Text>
          Место для работы я собираю в перчатках. Это необходимо для моей и
          вашей безопасности! Все предметы, которых мы будем касаться в рабочей
          зоне, я обрабатываю антисептиком и оборачиваю в плёнку (барьерную
          защиту). Краску из баночки я наливаю в одноразовый колпачок, который
          вместе с остатками краски выбрасывается после сеанса. Вазелин я достаю
          из банки одноразовым шпателем. В своей работе я использую качественные
          картриджи, они тоже одноразовые и находятся в стерильной упаковке.
          Вскрываю их при вас и утилизирую после сеанса, соблюдая строгие
          санитарные нормы. После каждого клиента я всегда обрабатываю мебель и
          оборудование: отправляю многоразовый держак на стерилизацию,
          дезинфицирую машинку, блок питания и провода.
        </Text>
      </div>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: space-between;
`;
const ImgContaner = styled.div`
  display: flex;
  flex-direction: column;
`;
const Image = styled.img`
  width: 437px;
  height: 517px;
  margin-right: 47px;

  &:first-child {
    margin-bottom: 60px;
  }
`;
const Subtitle = styled.h4`
  font-style: italic;
  font-weight: 500;
  font-size: 24px;
  line-height: 56px;
  color: #2235d1;
  margin: 0;
`;
const Text = styled.p`
  font-size: 20px;
  line-height: 56px;
`;
export default Place;

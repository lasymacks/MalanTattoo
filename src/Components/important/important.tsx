import React from "react";
import styled from "styled-components";
import Button from "../button";
import Subtitle from "../subtitle";
import Wrapper from "../wrapper";
import { motion } from "framer-motion";

const Important = () => {
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
  const ImportantSubtitle = styled.h3`
    font-weight: 600;
    font-size: 32px;
    line-height: 40px;
    color: #2235d1;
    margin: 0;
    margin-bottom: 10px;
  `;
  const List = styled.ul`
    max-width: 560px;
    padding: 0;
    margin: 0;
  `;
  const ListItem = styled.li`
    font-weight: 400;
    font-size: 20px;
    line-height: 56px;
    padding-left: 15px;

    &:before {
      content: "·";
      font-size: 35px;
      vertical-align: middle;
      line-height: 20px;
      position: relative;
      right: 10px;
      bottom: 4px;
    }
  `;
  const ImportantItemContainer = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 70px;
  `;
  const ImportantItemContainerRight = styled(ImportantItemContainer)`
    flex-direction: row-reverse;
  `;
  const ContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  `;
  const FirstImg = styled.img`
    max-width: 555px;
    max-height: 651px;
  `;
  const SecondImg = styled(FirstImg)`
    max-height: 480px;
  `;
  const ThirdImg = styled(FirstImg)`
    max-height: 1120px;
  `;

  return (
    <motion.div
      initial={{ y: 500, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ ease: "easeOut", duration: 0.6 }}
      viewport={{ once: true }}
    >
      <Subtitle>
        <IndentedWord>IMPORTANT</IndentedWord> IMPORTANT IM TANT{" "}
        <BlueText>IMPORTANT</BlueText> IMPORTAN
      </Subtitle>
      <Wrapper style={'margin-bottom: 150px;'}>
        <div>
          <ImportantItemContainer>
            <FirstImg src={require("./img/first.png")}></FirstImg>
            <List>
              <ImportantSubtitle>Противопоказания постоянные</ImportantSubtitle>
              <ul>
                <ListItem>
                  Склонность к образованию келоидных рубцов и другие заболевания
                  кожи
                </ListItem>
                <ListItem>
                  Заболевание крови (например, лейкоз) и нарушение её
                  свертываемости (гемофилия)
                </ListItem>
                <ListItem>Системные аутоиммунные заболевания</ListItem>
                <ListItem>Злокачественные новообразования</ListItem>
                <ListItem>Сахарный диабет (консультация с врачом)</ListItem>
                <ListItem>Гипертония (консультация с врачом)</ListItem>
                <ListItem>ВИЧ/СПИД/Гепатит</ListItem>
                <ListItem>Туберкулёз</ListItem>
                <ListItem>Эпилепсия</ListItem>
              </ul>
            </List>
          </ImportantItemContainer>
          <ImportantItemContainerRight>
            <SecondImg src={require("./img/second.png")}></SecondImg>
            <div>
              <ImportantSubtitle>Противопоказания временные</ImportantSubtitle>
              <List>
                <ListItem>Повышенная температура тела и ОРВИ</ListItem>
                <ListItem>Инфекции (вирусные, кишечные, кожные)</ListItem>
                <ListItem>Обострение хронических заболеваний</ListItem>
                <ListItem>Алкогольное/наркотическое опьянение</ListItem>
                <ListItem>Прием кроворазжижающих препаратов</ListItem>
                <ListItem>Беременность/лактация</ListItem>
                <ListItem>Менструация (индивидуально)</ListItem>
                <ListItem>Аллергия</ListItem>
              </List>
            </div>
          </ImportantItemContainerRight>
          <ImportantItemContainer>
            <ThirdImg src={require("./img/third.png")}></ThirdImg>
            <ContentContainer>
              <div>
                <ImportantSubtitle>
                  Как подготовиться к сеансу?
                </ImportantSubtitle>
                <List>
                  <ListItem>
                    Не употребляйте алкоголь за 1-2 дня до сеанса
                  </ListItem>
                  <ListItem>Не загорайте перед сеансом</ListItem>
                  <ListItem>
                    Не принимайте лекарства, разжижающие кровь
                  </ListItem>
                  <ListItem>
                    В день сеанса не употребляйте напитки, содержащие кофеин
                    (кофе, энергетики)
                  </ListItem>
                  <ListItem>
                    Перед сеансом не удаляйте волосы бритвой, могут появиться
                    раздражение и ранки на коже (при необходимости я сделаю это
                    сама)
                  </ListItem>
                  <ListItem>
                    Можете заранее подготовить кожу к сеансу - скраб и
                    увлажнение (особенно необходимо сухой кожи)
                  </ListItem>
                  <ListItem>
                    Приходите сытыми и выспавшимися - это поможет вам легче
                    перенести сеанс
                  </ListItem>
                  <ListItem>Надевайте комфортную одежду (не белую)</ListItem>
                  <ListItem>
                    Приходите, пожалуйста, без группы поддержки
                  </ListItem>
                  <ListItem>
                    При плохом самочувствии лучше перенесите сеанс
                  </ListItem>
                </List>
              </div>
              <Button
                text="Записаться"
                style={"align-self: center;"}
                onClick={() => {}}
              />
            </ContentContainer>
          </ImportantItemContainer>
        </div>
      </Wrapper>
    </motion.div>
  );
};
export default Important;

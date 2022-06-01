import React from "react";
import styled from "styled-components";

const Session = () => {
  return (
    <Container>
      <ImgContaner>
        <Image src={require("./img/img1.png")} alt="Broken :("></Image>
        <Image src={require("./img/img2.png")} alt="Broken :("></Image>
        <Image src={require("./img/img3.png")} alt="Broken :("></Image>
      </ImgContaner>

      <List>
        <Subtitle> Как проходит сеанс.</Subtitle>
        <ListItem>Первым делом мы окончательно утверждаем эскиз</ListItem>
        <ListItem>
          Я печатаю эскиз в нескольких размерах с разницей 0,5 см
        </ListItem>
        <ListItem>
          Вырезаю их, чтобы приложить к вашему телу и выбрать самый удачный
          вариант. Утверждаем расположение на коже, опираясь на ваши ощущения и
          мои рекомендации. Важно, чтобы эскиз гармонично вписывался в анатомию
          вашего тела!
        </ListItem>
        <ListItem>
          На трансферном принтере я печатаю удачный размер для того, чтобы
          перевести эскиз на кожу. Не переживайте, переводить трансфер на кожу
          мы будем, пока не найдём идеальное для тату место.
        </ListItem>
        <ListItem>Я готовлю рабочее место.</ListItem>
        <ListItem>
          Приступаем к процессу нанесения тату. При необходимости делаем
          перерывы, вы сможете отдохнуть, выпить воду или чай.
        </ListItem>
        <ListItem>
          После окончания нанесения тату я снимаю на телефон фото и видео,
          которыми делюсь с вами после сеанса.
        </ListItem>
        <ListItem>
          В конце я клею заживляющую пленку (с ней ваше заживление будет
          максимально безопасным).
        </ListItem>
        <ListItem>
          Я даю вам рекомендации по уходу и отвечаю на вопросы.
        </ListItem>
        <Text>
          Спасибо за сеанс! Вы получили новую тату и мою обратную связь на весь
          период заживления.
        </Text>
      </List>
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
  margin-bottom: 55px;

  &:last-child {
    margin-bottom: 0;
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
const List = styled.ul`
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
const Text = styled.p`
  margin-top: 30px;
  font-size: 20px;
  line-height: 56px;
`

export default Session;

import React from "react";
import styled from "styled-components";

const Consultation = () => {
  return (
    <Container>
      <Image src={require("./img/img.png")} alt="Broken :("></Image>
      <div>
        <Subtitle>Консультация в онлайн и офлайн формате.</Subtitle>
        <Text>
          Онлайн-консультация экономит ваше и мое время: в чате я отвечу на все
          ваши вопросы, помогу с идеей и реализацией эскиза. Но если вы
          сомневаетесь, хотите познакомиться лично и примерить эскиз, то мы
          можем заранее встретиться в студии. Выбирайте для себя комфортный
          вариант.
        </Text>
      </div>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Image = styled.img`
  width: 437px;
  height: 517px;
  margin-right: 47px;
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

export default Consultation;

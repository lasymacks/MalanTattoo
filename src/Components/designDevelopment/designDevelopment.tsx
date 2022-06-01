import React from "react";
import styled from "styled-components";

const DesignDevelopment = () => {
  return (
    <Container>
      <Image src={require("./img/img.png")} alt="Broken :("></Image>
      <div>
        <Subtitle>Как создаются индивидуальные эскизы?</Subtitle>
        <Text>
          Вы присылаете референсы (примеры), делитесь
          пожеланиями/идеями/смыслами, выбираете примерные место на теле и
          размер, от которых зависит детализация эскиза. Далее я рисую первый
          эскиз-набросок, присылаю вам, мы обсуждаем и вносим правки. Конечный
          результат я дорабатываю и присылаю на утверждение заранее, чтобы вам
          было спокойнее.
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
  height: 525px;
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

export default DesignDevelopment;

import React from "react";
import styled from "styled-components";

const Title = () => {
  const Container = styled.div`
    position: relative;
    width: 509px;
    height: 136px;
    margin: 0 auto 40px auto;
  `;
  const Img = styled.img`
    position: absolute;
    top: -7px;
    left: -10px;
  `;
  const Title = styled.h1`
    font-weight: 400;
    font-size: 128px;
    line-height: 136px;
  `;
  const TitleText = styled.span`
  position: absolute;
  left: 368px;
  top: 108px;
  font-weight: 300;
  font-size: 36px;
  line-height: 44px;
  color: #2235D1;
  `

  return (
    <Container>
      <Img src={require("./img/star.png")} alt="*" />
      <Title>MALAN</Title>
      <TitleText>tattoo</TitleText>
    </Container>
  );
};

export default Title;

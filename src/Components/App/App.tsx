import React from "react";
import Header from "../header";
import PresentationBlock from "../presentationBlock";
import styled from "styled-components";
import AboutMe from "../aboutMe";
import MyWorks from "../myWorks";

const App = () => {
  const Container = styled.div`
    margin: 0 auto;
    max-width: 1440px;
    box-shadow: 5px 5px 5px #e5e5e5, -5px -5px 5px #e5e5e5;
  `;

  return (
    <Container>
      <Header />
      <PresentationBlock />
      <AboutMe />
      <MyWorks />
    </Container>
  );
};

export default App;

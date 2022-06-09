import React from "react";
import Header from "../header";
import PresentationBlock from "../../Pages/presentationBlock";
import styled from "styled-components";
import AboutMe from "../../Pages/aboutMe";
import MyWorks from "../../Pages/myWorks";
import Certificate from "../../Pages/certificate";
import Important from "../../Pages/important";
import Price from "../../Pages/price";
import Workflow from "../../Pages/workflow";
import { Route, Routes } from "react-router";

const App = () => {
  const Container = styled.div`
    margin: 0 auto;
    max-width: 1440px;
    box-shadow: 5px 5px 5px #e5e5e5, -5px -5px 5px #e5e5e5;
    position: relative;
  `;

  return (
    <Container>
      <Header />
      <Routes>
        <Route path="/aboutMe" element={<AboutMe />} />
      </Routes>
      <Routes>
        <Route path="/" element={<PresentationBlock />} />
      </Routes>

      <MyWorks />
      <Certificate />
      <Workflow />
      <Important />
      <Price />
    </Container>
  );
};

export default App;

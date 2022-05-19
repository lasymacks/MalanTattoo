import React, { ReactNode } from "react";
import styled from "styled-components";

interface IWrrapper {
  children: ReactNode;
  style?: string;
}

const Wrapper = ({ children, style }: IWrrapper) => {
  const Section = styled.section`
    padding: 0 150px;
    ${style}
  `;

  return <Section>{children}</Section>;
};

export default Wrapper;

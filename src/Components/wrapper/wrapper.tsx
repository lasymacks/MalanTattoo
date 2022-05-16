import React, { ReactNode } from "react";
import styled from "styled-components";

interface IWrrapper {
  children: ReactNode;
  className?: string;
}

const Wrapper = ({ children, className }: IWrrapper) => {
  const Section = styled.section`
    padding: 0 150px;
    ${className}
  `;

  return <Section>{children}</Section>;
};

export default Wrapper;

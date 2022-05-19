import React, { ReactNode } from "react";
import styled from "styled-components";

interface ISubtitle {
  children: ReactNode;
  style?: string;
}

const Subtitle = ({ children, style }: ISubtitle) => {
  const Subtitle = styled.h2`
    font-weight: 400;
    font-size: 96px;
    line-height: 102px;
    color: #fff;
    text-shadow: 1px 0 #000, 0 1px #000, -1px 0 #000, 0 -1px #000;
    ${style}
  `;

  return <Subtitle>{children}</Subtitle>;
};

export default Subtitle;

import { motion } from "framer-motion";
import React, { ReactNode, useState } from "react";
import styled from "styled-components";

interface IAccordion {
  children: ReactNode;
}

const Accordion = ({ children }: IAccordion) => {
  const [isActive, setIsActive] = useState(false);

  const AccordionContainer = styled.div`
    border-bottom: 1px solid rgba(0, 0, 0, 0.5);
    margin-bottom: 18px;
    cursor: pointer;
    transition: transform 0.3s ease-in-out;
  `;
  const AccordionContentWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
  `;
  const AccordinButton = styled.button`
    border: none;
    background-color: transparent;
    width: 41px;
    height: 41px;
  `;
  const AccordionChildItem = styled.div`
    font-weight: 400;
    font-size: 20px;
    line-height: 24px;
    padding-bottom: 20px;
  `;

  const AccordionContainerHandler = () => {
    setIsActive((prevState) => !prevState);
  };

  return (
    <AccordionContainer onClick={AccordionContainerHandler}>
      <AccordionContentWrapper>
        {children}
        {isActive && (
          <motion.div
            initial={{ rotate: 0 }}
            animate={{ rotate: 45 }}
            transition={{ ease: "easeOut", duration: 0.3 }}
            viewport={{ once: true }}
          >
            <AccordinButton>
              <svg
                width="42"
                height="41"
                viewBox="0 0 42 41"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <line
                  y1="-1.5"
                  x2="40.251"
                  y2="-1.5"
                  transform="matrix(1 0 0.000819435 1 1 21.4553)"
                  stroke="black"
                  stroke-opacity="0.7"
                  stroke-width="3"
                />
                <line
                  x1="21.5044"
                  y1="41"
                  x2="21.5044"
                  stroke="black"
                  stroke-opacity="0.7"
                  stroke-width="3"
                />
              </svg>
            </AccordinButton>
          </motion.div>
        )}
        {!isActive && (
          <AccordinButton>
            <svg
              width="42"
              height="41"
              viewBox="0 0 42 41"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <line
                y1="-1.5"
                x2="40.251"
                y2="-1.5"
                transform="matrix(1 0 0.000819435 1 1 21.4553)"
                stroke="black"
                stroke-opacity="0.7"
                stroke-width="3"
              />
              <line
                x1="21.5044"
                y1="41"
                x2="21.5044"
                stroke="black"
                stroke-opacity="0.7"
                stroke-width="3"
              />
            </svg>
          </AccordinButton>
        )}
      </AccordionContentWrapper>
      {isActive && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          transition={{ ease: "easeOut", duration: 0.3 }}
          viewport={{ once: true }}
        >
          <AccordionChildItem>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
            exercitationem deserunt beatae in minima sapiente illo eos sed
            cupiditate reprehenderit saepe perspiciatis nam doloremque
            blanditiis, libero reiciendis facilis omnis. Voluptatum. Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Consectetur
            exercitationem deserunt beatae in minima sapiente illo eos sed
            cupiditate reprehenderit saepe perspiciatis nam doloremque
            blanditiis, libero reiciendis facilis omnis. Voluptatum. Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Consectetur
            exercitationem deserunt beatae in minima sapiente illo eos sed
            cupiditate reprehenderit saepe perspiciatis nam doloremque
            blanditiis, libero reiciendis facilis omnis. Voluptatum.
          </AccordionChildItem>
        </motion.div>
      )}
    </AccordionContainer>
  );
};

export default Accordion;

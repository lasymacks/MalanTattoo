import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Header = () => {
  const Container = styled.div`
    padding: 35px 150px;
    background-color: #000;
    color: #fff;
  `;
  const Nav = styled.nav``;
  const List = styled.ul`
    list-style: none;
    display: flex;
    justify-content: space-between;
  `;
  const Item = styled.li`
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 24px;
  `;

  const LinkItem = styled.a`
    color: #fff;
    transition: color 0.1s ease-in-out;
    &:hover {
      color: #0b38eb;
    }
    &:active {
      color: #0b38eb;
    }
  `;

  return (
    <Container className="header-container">
      <Nav className="header-container__nav-menu">
        <List className="header-container__nav-menu__list">
          <Item className="header-container__nav-menu__list__item">
            <Link to="/aboutMe">
              <LinkItem
                className="header-container__nav-menu__list__item__link"
                href="#"
              >
                Обо мне
              </LinkItem>
            </Link>
          </Item>
          <Item className="header-container__nav-menu__list__item">
            <LinkItem
              className="header-container__nav-menu__list__item__link"
              href="#"
            >
              Работы
            </LinkItem>
          </Item>
          <Item className="header-container__nav-menu__list__item">
            <LinkItem
              className="header-container__nav-menu__list__item__link"
              href="#"
            >
              Цены
            </LinkItem>
          </Item>
          <Item className="header-container__nav-menu__list__item">
            <LinkItem
              className="header-container__nav-menu__list__item__link"
              href="#"
            >
              Важное
            </LinkItem>
          </Item>
          <Item className="header-container__nav-menu__list__item">
            <LinkItem
              className="header-container__nav-menu__list__item__link"
              href="#"
            >
              Контакты
            </LinkItem>
          </Item>
        </List>
      </Nav>
    </Container>
  );
};

export default Header;

import React from "react";
import "./header.scss";

const Header = () => {
  return (
    <div className="header-container">
      <nav className="header-container__nav-menu">
        <ul className="header-container__nav-menu__list">
          <li className="header-container__nav-menu__list__item">
            <a className="header-container__nav-menu__list__item__link" href="#">Обо мне</a>
          </li>
          <li className="header-container__nav-menu__list__item">
            <a className="header-container__nav-menu__list__item__link" href="#">Работы</a>
          </li>
          <li className="header-container__nav-menu__list__item">
            <a className="header-container__nav-menu__list__item__link" href="#">Цены</a>
          </li>
          <li className="header-container__nav-menu__list__item">
            <a className="header-container__nav-menu__list__item__link" href="#">Важное</a>
          </li>
          <li className="header-container__nav-menu__list__item">
            <a className="header-container__nav-menu__list__item__link" href="#">Контакты</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;

import React from "react";
import { Logo } from "./utils";
import logo from "../assets/logo.svg";
import "./Header.scss";

const Header = () => {
  return (
    <header>
      <div className="logo-container">
        <a href="./">
          <Logo src={logo} />
        </a>
      </div>
      <div className="menu-container">
        <div className="stroke stroke-one"></div>
        <div className="stroke stroke-two"></div>
      </div>
    </header>
  );
};

export default Header;

import React from "react";
import { Logo } from "./utils";
import logo from "../assets/logo.svg";
import "./Header.scss";

const Header = () => {
  return (
    <header className="main-header">
      <div className="container">
        <div className="contsnt">
          <div className="logo-container">
            <a href="./">
              <Logo src={logo} />
            </a>
          </div>
          <div className="menu">
            <div className="stroke stroke-one"></div>
            <div className="stroke stroke-two"></div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

import "./Button.scss";

import React from "react";

const Button = ({ text, type }) => {
  return <button className={`btn btn-${type}`}>{text}</button>;
};

export default Button;

import React from "react";
import Logo from "./logo.svg";
import NewTopic from "../NewTopic/NewTopic"
import "./header.css";

function Header() {
  return (
    <div className="header">
      <img src={Logo} alt="circles" />
      <h2>Haiku 4 U</h2>
      <NewTopic/>
    </div>
  );
}

export default Header;

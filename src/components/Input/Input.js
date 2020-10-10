import React from "react";
import "./input.css";

function Input() {
  return (
    <div className="input">
      <h5 className="subject">subject</h5>
      <h3 className="subject-name">Pizza Puffs</h3>
      <div className="form">
        <input placeholder="This box is for you, with your creative gift to, begin your haiku"></input>
        <button>PUBLISH HAIKU</button>
      </div>
    </div>
  );
}

export default Input;

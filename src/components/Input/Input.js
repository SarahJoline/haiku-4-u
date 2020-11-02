import React from "react"; 
import "./input.css";

function Input() {
  return (
    <div className="input">
      <h5 className="subject">SUBJECT</h5>
      <h3 className="subject-name">Pizza Puffs</h3>
      <div className="form">
        <textarea
          rows="3"
          cols="2"
          placeholder="This box is for you,&#10;with your creative gift to,&#10;begin your haiku"
        ></textarea>
        <button>PUBLISH HAIKU</button>
      </div>
    </div>
  );
}

export default Input;

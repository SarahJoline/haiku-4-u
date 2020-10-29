import React, {useState} from "react";
import axios from "axios";
import "./input.css";

function Input() {
  const [value, modifier] = useState({ value: " " });
  let [haiku, haikuModifier] = useState([]);

  function submitHaiku(e, haiku) {
    axios.post("/api/haikus", {
      Subject: haiku.subject,
    text: haiku.text,
    author: haiku.author}).catch((err) => {
      if (err) {
        console.log(err)
      }
    })
  }

  return (
    <div className="input">
      <h5 className="subject">SUBJECT</h5>
      <h3 className="subject-name">Pizza Puffs</h3>
      <div className="form">
        <textarea
          rows="3"
          cols="2"
          placeholder="This box is for you,&#10;with your creative gift to,&#10;begin your haiku"
          onChange={(e) => {
            modifier({ value: e.target.value });
          }}
        ></textarea>
        <button>PUBLISH HAIKU</button>
      </div>
    </div>
  );
}

export default Input;

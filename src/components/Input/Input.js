import React, { useState } from "react";
import "./input.css";
import axios from "axios";

function Input(props) {
  const haikus = props.haikuData;
  const fetchData = props.fetchData;
  console.log(haikus);

  let [haiku, setHaiku] = useState({
    subject: haikus,
    text: " ",
  });

  function postNew() {
    axios
      .post("/api/posted", {
        text: haiku.text,
        subject: haiku.subject,
      })
      .then(fetchData())
      .catch((err) => {
        if (err) {
          console.log(err);
        }
      });
  }

  return (
    <div className="input">
      <div className="form">
        <textarea
          className="haiku-text"
          rows="3"
          placeholder="Write your haikus here,&#10;bla bla bla bla bla, bla bla.&#10;Then smash 'publish', bitch"
          onChange={(e) => {
            setHaiku({ ...haiku, text: e.target.value });
          }}
        ></textarea>
        <button
          className="publish-btn"
          onClick={(e) => {
            postNew(haiku);
          }}
        >
          PUBLISH HAIKU
        </button>
      </div>
    </div>
  );
}

export default Input;

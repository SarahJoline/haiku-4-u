import React, { useState } from "react";
import "./input.css";
import axios from "axios";

function Input(props) {
  const subject = props.haikuData;
  const fetchData = props.fetchData;

  let [haiku, setHaiku] = useState({
    subject: subject,
    text: " ",
    author: " ",
  });

  function postNew(haiku) {
    axios
      .post("/api/posted", {
        text: haiku.text,
        subject: haiku.subject.trim(),
        author: haiku.author.trim(),
      })
      .then((res) => {
        fetchData();
      })
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
          placeholder="5 syllables&#10;7 syllables&#10;5 syllables"
          onChange={(e) => {
            setHaiku({ ...haiku, text: e.target.value });
          }}
        ></textarea>
        <input
          className="haiku-author"
          placeholder="Your name here"
          onChange={(e) => {
            setHaiku({ ...haiku, author: e.target.value });
          }}
        ></input>
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

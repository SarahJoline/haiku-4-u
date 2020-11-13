import React, { useState } from "react";
import axios from "axios";
import "./newTopic.css";

function NewTopic(props) {
  let [haiku, setHaiku] = useState({ subject: " ", author: " ", text: " " });
  const fetchData = props.fetchData;
  console.log(fetchData);

  function postHaiku(haiku) {
    axios
      .post("/api/posted", {
        subject: haiku.subject,
        author: haiku.author,
        text: haiku.text,
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
    <div className="topic-launch">
      <div className="subject-form">
        <input
          className="subject-input"
          placeholder="Subject here, bitch"
          onChange={(e) => {
            setHaiku({ ...haiku, subject: e.target.value });
          }}
        ></input>
        <textarea
          className="newTopic-input"
          rows="3"
          cols="2"
          placeholder="Write your haikus here,&#10;bla bla bla bla bla, bla bla.&#10;Then smash 'publish', bitch"
          onChange={(e) => {
            setHaiku({ ...haiku, text: e.target.value });
          }}
        ></textarea>
        <input
          className="author"
          placeholder="Your name here, bitch"
          onChange={(e) => {
            setHaiku({ ...haiku, author: e.target.value });
          }}
        ></input>
        <button
          className="submitNewTopic"
          onClick={(e) => {
            postHaiku(haiku);
          }}
        >
          PUBLISH HAIKU
        </button>
      </div>
    </div>
  );
}

export default NewTopic;

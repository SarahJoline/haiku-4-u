import React, { useState } from "react";
import axios from "axios";
import "./newTopic.css";

function NewTopic(props) {
  let [haiku, setHaiku] = useState({ subject: " ", author: " ", text: " " });
  const fetchData = props.fetchData;
  const closeModal = props.onClose;

  function postHaiku() {
    axios
      .post("/api/posted", {
        subject: haiku.subject.trim(),
        author: haiku.author.trim(),
        authorID: haiku.author.split(" ").join(""),
        text: haiku.text.trim(),
      })
      .then((res) => {
        fetchData();
      })
      .then(() => {
        closeModal();
      })
      .catch((err) => {
        if (err) {
          console.log(err);
        }
      });
  }

  //if author exists postscounter ++1 else

  return (
    <div className="topic-launch">
      <div className="subject-form">
        <input
          className="subject-input"
          placeholder="Subject here"
          onChange={(e) => {
            setHaiku({ ...haiku, subject: e.target.value });
          }}
        ></input>
        <textarea
          className="newTopic-input"
          rows="3"
          cols="2"
          placeholder="5 syllables&#10;7 syllables&#10;5 syllables"
          onChange={(e) => {
            setHaiku({ ...haiku, text: e.target.value });
          }}
        ></textarea>
        <input
          className="author"
          placeholder="Your name here"
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

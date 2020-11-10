import React, { useState } from "react";
import axios from "axios";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";

function NewTopic() {
  let [haiku, setHaiku] = useState({ subject: " ", author: " ", text: " " });

  function postHaiku(haiku) {
    axios
      .post("/api/posted", {
        subject: haiku.subject,
        author: haiku.author,
        text: haiku.text,
      })
      .catch((err) => {
        if (err) {
          console.log(err);
        }
      });
  }

  return (
    <div className="topic-launch">
      <div className="form">
        <input
          className="subject"
          placeholder="Subject here, bitch"
          onChange={(e) => {
            setHaiku({ ...haiku, subject: e.target.value });
          }}
        ></input>
        <textarea
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
          className="submitHaiku"
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

import React, {useState} from "react";
import axios from "axios";

function NewTopic() {
    let [haiku, setHaiku] = useState({subject: " ", author: " ", text: " "});

     function postHaiku(haiku) {
        axios
          .post("/api/posted", {
            subject: haiku.subject,
            author: haiku.author,
            text: haiku.text
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
      <input className="subject" placeholder="Haiku subject" onChange={(e) => {
            setHaiku({ ...haiku, subject: e.target.value})}}></input>
        <textarea
          rows="3"
          cols="2"
          placeholder="This box is for you,&#10;with your creative gift to,&#10;begin your haiku"
          onChange={(e) => {
            setHaiku({ ...haiku, text: e.target.value });
          }}></textarea>
        <input className="author" placeholder="Your name here" onChange={(e) => {
            setHaiku({ ...haiku, author: e.target.value })}}></input>
        <button className="submitHaiku" onClick={(e) => {
              postHaiku(haiku);
            }}>PUBLISH HAIKU</button>
      </div>
    </div>
  );
}

export default NewTopic;
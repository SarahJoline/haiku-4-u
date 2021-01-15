import React, { useState, useEffect } from "react";
import Squiggles from "../HaikuRow/squiggles.svg";
import "./index.css";
import axios from "axios";
import _ from "lodash";
import Subjects from "../Subjects";

function PoetPage(props) {
  let [author, setAuthor] = useState();
  let [authorName, setAuthorName] = useState();
  const url = props.match.params.authorID;

  useEffect(() => {
    getAuthor();
  }, []);

  function getAuthor() {
    axios
      .get("/api/author/" + url)
      .then((res) => {
        let authorInfo = _.groupBy(res.data, "subject");
        setAuthorName(res.data[0].author);
        setAuthor(authorInfo);
      })
      .catch((err) => {
        if (err) {
          console.log(err);
        }
      });
  }

  const authorSubjects = [];

  for (let subject in author) {
    authorSubjects.push(
      <div className="poet" key={subject}>
        <div className="poetEntries">
          <h2 className="entryTitle">{subject}</h2>
          <Subjects subject={author[subject]} />
        </div>
      </div>
    );
  }

  return author !== undefined ? (
    <div>
      <div className="poetName">{authorName}</div>
      <img src={Squiggles} alt="squiggly lines" className="squiggles" />
      <div>{authorSubjects}</div>
    </div>
  ) : (
    <div></div>
  );
}

export default PoetPage;

import React, { useState, useEffect } from "react";
import Squiggles from "./squiggles.svg";
import "./poetPage.css";
import axios from "axios";
import _ from "lodash";
import AuthSubjectEntry from "../AuthSubjectEntry/AuthSubjectEntry";

function PoetPage(props) {
  let [author, setAuthor] = useState();
  let [authorName, setAuthorName] = useState();
  const url = props.match.params.authorID;
  console.log("AHHHHHHHHHHHHHHHH    ", url);

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
        console.log(res);
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
          <AuthSubjectEntry authSubData={author[subject]} />
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

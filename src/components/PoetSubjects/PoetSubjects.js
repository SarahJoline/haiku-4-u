import React from "react";
import "./poetSubjects.css";
import _ from "lodash";
import AuthSubjectEntry from "../AuthSubjectEntry/AuthSubjectEntry";

function PoetSubjects(props) {
  const authors = props.authorData;
  const authSub = _.groupBy(authors, "subject");
  console.log(authSub);

  const authorSubjects = [];

  for (let subject in authSub) {
    authorSubjects.push(
      <div className="poet" key="subject">
        <div className="poetEntries">
          <div className="entryTitle">{subject}</div>
          <AuthSubjectEntry authSubData={authSub[subject]} />
        </div>
      </div>
    );
  }

  return authors !== undefined ? (
    <div>
      <div>{authorSubjects}</div>
    </div>
  ) : (
    <div></div>
  );
}

export default PoetSubjects;

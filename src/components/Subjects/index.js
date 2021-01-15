import React from "react";
import "./index.css";

function Subjects(props) {
  const subjectEntries = props.subject;

  return subjectEntries !== undefined ? (
    <div className="poet">
      {subjectEntries.map((res) => (
        <pre className="entryText" key={res._id}>
          {res.text}
        </pre>
      ))}
    </div>
  ) : (
    <div></div>
  );
}

export default Subjects;

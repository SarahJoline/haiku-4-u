import React from "react";
import "./authSubjectEntry.css";

function AuthSubjectEntry(props) {
  const subjectEntries = props.authSubData;
  console.log(subjectEntries);

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

export default AuthSubjectEntry;

import React from "react";

function AuthSubjectEntry(props) {
  const subjectEntries = props.authSubData;

  return subjectEntries !== undefined ? (
    <div className="poet">
      {subjectEntries.map((res) => (
        <pre className="entryText">{res.text}</pre>
      ))}
    </div>
  ) : (
    <div></div>
  );
}

export default AuthSubjectEntry;

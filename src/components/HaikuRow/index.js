import React from "react";
import "./index.css";
import Squiggles from "./squiggles.svg";
import Input from "../Input";
import PublishedHaiku from "../PublishedHaiku";

function HaikuRow(props) {
  const haikus = props.haikuData;
  const authors = props.authorData;
  const fetchData = props.fetchData;
  const posts = props.postData;

  const haikuRows = [];

  for (let subject in haikus) {
    haikuRows.push(
      <div className="haikuRow" key={subject}>
        <img src={Squiggles} alt="squiggly lines" className="squiggles" />
        <div className="rows">
          <div className="col">
            <h5 className="subject">SUBJECT</h5>
            <h3 className="subject-name">{subject}</h3>
            <Input haikuData={subject} fetchData={fetchData} />
          </div>
          <PublishedHaiku
            haikuData={haikus[subject]}
            authorData={authors}
            postData={posts}
            fetchData={fetchData}
          />
        </div>
      </div>
    );
  }

  return haikus !== undefined ? <div>{haikuRows}</div> : <div></div>;
}

export default HaikuRow;

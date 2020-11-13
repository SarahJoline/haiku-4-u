import React from "react";
import "./haikuRow.css";
import Squiggles from "./squiggles.svg";
import Input from "../Input/Input";
import PublishedHaiku from "../PublishedHaiku/PublishedHaiku";

function HaikuRow(props) {
  const haikus = props.haikuData;
  const fetchData = props.fetchData;

  // Render a set of rows, one for each subject in our "haikus" object.
  const haikuRows = [];

  for (let subject in haikus) {
    console.log(haikus);
    haikuRows.push(
      <div className="haikuRow" key={subject}>
        <img src={Squiggles} alt="squiggly lines" className="squiggles" />
        <div className="rows">
          <div className="col">
            <h5 className="subject">SUBJECT</h5>
            <h3 className="subject-name">{subject}</h3>
            <Input haikuData={subject} fetchData={fetchData} />
          </div>
          <PublishedHaiku haikuData={haikus[subject]} fetchData={fetchData} />
        </div>
      </div>
    );
  }

  return haikus !== undefined ? <div>{haikuRows}</div> : <div></div>;
}

export default HaikuRow;

import React, { useState, useEffect } from "react";
import "./haikuRow.css";
import Squiggles from "./squiggles.svg";
import Input from "../Input/Input";
import PublishedHaiku from "../PublishedHaiku/PublishedHaiku";
import _ from "lodash";

function HaikuRow() {
  let [haikus, setHaikus] = useState();

  useEffect(() => {
    async function fetchData() {
      let res = await fetch("/api/haikus");
      res = await res.json();
      const rawHaikus = res;
      //  const groupedHaikus = _.groupBy(rawHaikus, "subject") // easy syntax
      const groupedHaikus = _.groupBy(rawHaikus, (element) => {
        if (element.subject == undefined) {
          return "miscellaneous";
        }
        return element.subject;
      });
      setHaikus(groupedHaikus);
    }
    fetchData();
  }, []);

  // Render a set of rows, one for each subject in our "haikus" object.
  const haikuRows = [];

  for (let subject in haikus) {
    haikuRows.push(
      <div className="haikuRow">
        <img src={Squiggles} alt="squiggly lines" className="squiggles" />
        <div className="rows">
          <div className="col">
            <h5 className="subject">SUBJECT</h5>
            <h3 className="subject-name">{subject}</h3>
            <Input haikuData={subject} />
          </div>
          <PublishedHaiku haikuData={haikus[subject]} />
        </div>
      </div>
    );
  }

  return haikus !== undefined ? <div>{haikuRows}</div> : <div></div>;
}

export default HaikuRow;

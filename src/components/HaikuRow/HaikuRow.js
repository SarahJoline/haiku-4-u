import React from "react";
import "./haikuRow.css";
import Squiggles from "./squiggles.svg";
import Input from "../Input/Input";
import PublishedHaiku from "../PublishedHaiku/PublishedHaiku";

function HaikuRow() {
  return (
    <div className="haikuRow">
      <img src={Squiggles} alt="squiggly lines" className="squiggles" />
      <div className="rows">
        <Input />
        <PublishedHaiku />
      </div>
    </div>
  );
}

export default HaikuRow;

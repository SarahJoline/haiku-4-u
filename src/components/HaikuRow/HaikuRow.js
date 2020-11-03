import React, {useState, useEffect} from "react";
import "./haikuRow.css";
import axios from "axios";
import Squiggles from "./squiggles.svg";
import Input from "../Input/Input";
import PublishedHaiku from "../PublishedHaiku/PublishedHaiku";

function HaikuRow() {
  let [haikus, setHaikus] = useState({ saved: [] });

  useEffect(() => {
    axios
      .get("/api/haikus")
      .then((haikus) => {
        console.log(haikus)
        setHaikus({ saved: haikus });
      })
      .catch((err) => console.log(err));
  }, []);

  let savedArr = !haikus.saved.data ? [] : haikus.saved.data;
  console.log(savedArr);

  return savedArr !== undefined ? (
    <div>
      {savedArr.map((res) => (
    <div className="haikuRow">
      <img src={Squiggles} alt="squiggly lines" className="squiggles" />
      <div className="rows">
        <Input />
       <PublishedHaiku />
      </div>
    </div>
  ))}
  </div>
  ) : (
<div className="container">
  <div>
    <h4>Nothing Yet!</h4>
  </div>
</div>
);
}

export default HaikuRow;

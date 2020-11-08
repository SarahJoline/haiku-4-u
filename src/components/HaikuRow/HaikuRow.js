import React, {useState, useEffect} from "react";
import "./haikuRow.css";
import Squiggles from "./squiggles.svg";
import Input from "../Input/Input";
import PublishedHaiku from "../PublishedHaiku/PublishedHaiku";

function HaikuRow() {
  let [haiku, setHaikus] = useState();
  
  useEffect(() => {
    async function fetchData() {
     let res = await fetch("/api/haikus")
     res = await res.json()
      setHaikus(res)
     }
      fetchData()
  }, []);


  return haiku !== undefined ? (
    <div>
      {haiku.map((haiku) => (
    <div className="haikuRow" key={haiku._id}>
      <img src={Squiggles} alt="squiggly lines" className="squiggles" />
      <div className="rows">
        <div className="col">
      <h5 className="subject">SUBJECT</h5>
      <h3 className="subject-name">{haiku.subject}</h3>
        <Input haikuData={haiku}/>
        </div>
       <PublishedHaiku haikuData={haiku}/>
      </div>
    </div>
  ))}
  </div>
  ) : (
<div className="container">
  <div>
    {/* add a loading thingy here maybe */}
  </div>
</div>
);
}


export default HaikuRow;

import React, { useState, useEffect } from "react";
import "./reset.css";
import "./App.css";
import Header from "./components/Header/Header";
import HaikuRow from "./components/HaikuRow/HaikuRow";
import _ from "lodash";

function App() {
  let [haikus, setHaikus] = useState();

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    let res = await fetch("/api/haikus");
    const rawHaikus = await res.text();
    console.log(rawHaikus);
    const groupedHaikus = _.groupBy(rawHaikus, "subject"); // easy syntax

    // This allows for more manipulation

    // const groupedHaikus = _.groupBy(rawHaikus, (element) => {
    //   if (element.subject === undefined || element.subject === " ") {
    //     return "Miscellaneous";
    //   }
    //   return element.subject;
    // });
    setHaikus(groupedHaikus);
  }
  return (
    <div className="App">
      <Header fetchData={fetchData} />
      <HaikuRow haikuData={haikus} fetchData={fetchData} />
    </div>
  );
}

export default App;

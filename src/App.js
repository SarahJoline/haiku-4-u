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
    res = await res.json();
    const rawHaikus = res;
    //  const groupedHaikus = _.groupBy(rawHaikus, "subject") // easy syntax
    const groupedHaikus = _.groupBy(rawHaikus, (element) => {
      if (element.subject === undefined) {
        return "miscellaneous";
      }
      return element.subject;
    });
    setHaikus(groupedHaikus);
  }
  return (
    <div className="App">
      <Header haikuData={haikus} fetchData={fetchData} />
      <HaikuRow haikuData={haikus} fetchData={fetchData} />
    </div>
  );
}

export default App;

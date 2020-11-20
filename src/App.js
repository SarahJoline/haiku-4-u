import React, { useState, useEffect } from "react";
import "./reset.css";
import "./App.css";
import Header from "./components/Header/Header";
import HaikuRow from "./components/HaikuRow/HaikuRow";
import _ from "lodash";

function App() {
  let [haikus, setHaikus] = useState();
  let [authors, setAuthors] = useState();
  let [posts, setPosts] = useState();

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    let res = await fetch("/api/haikus");
    console.log(res);
    const rawHaikus = await res.json();
    const groupedHaikus = _.groupBy(rawHaikus, "subject"); // easy syntax
    const groupedAuthors = _.groupBy(rawHaikus, "author");
    const posts = _.countBy(rawHaikus, "author");

    // This allows for more manipulation

    // const groupedHaikus = _.groupBy(rawHaikus, (element) => {
    //   if (element.subject === undefined || element.subject === " ") {
    //     return "Miscellaneous";
    //   }
    //   return element.subject;
    // });
    setPosts(posts);
    setHaikus(groupedHaikus);
    setAuthors(groupedAuthors);
  }
  return (
    <div className="App">
      <Header fetchData={fetchData} />
      <HaikuRow
        haikuData={haikus}
        authorData={authors}
        postData={posts}
        fetchData={fetchData}
      />
    </div>
  );
}

export default App;

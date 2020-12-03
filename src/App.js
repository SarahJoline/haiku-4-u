import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./reset.css";
import "./App.css";
import Header from "./components/Header/Header";
import HaikuRow from "./components/HaikuRow/HaikuRow";
import PoetPage from "./components/PoetPage/PoetPage";
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
    const rawHaikus = await res.json();
    const groupedHaikus = _.groupBy(rawHaikus, "subject"); // easy syntax
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
  }

  // function fetchAuthorRoute() {
  //   return "/"
  // }

  // function getAuthorID() {
  //   console.log("Hello");
  // }

  return (
    <Router>
      <div className="App">
        <Header fetchData={fetchData} />
        <Switch>
          <Route exact path="/">
            <HaikuRow
              haikuData={haikus}
              postData={posts}
              fetchData={fetchData}
            />
          </Route>
          <Route path={"/:authorID"}>
            <PoetPage></PoetPage>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

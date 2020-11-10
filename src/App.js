import React from "react";
import "./reset.css";
import "./App.css";
import Header from "./components/Header/Header";
import HaikuRow from "./components/HaikuRow/HaikuRow";

function App() {
  return (
    <div className="App">
      <Header />

      <HaikuRow />

    </div>
  );
}

export default App;

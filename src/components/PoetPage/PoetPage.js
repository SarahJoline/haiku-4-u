import React from "react";
import Squiggles from "./squiggles.svg";
import PoetSubjects from "../PoetSubjects/PoetSubjects";
import "./poetPage.css";

function PoetPage(props) {
  function fetchAuthors() {
    let author = fetch("/api/:authorID");
    console.log(author);
  }

  fetchAuthors();

  const authorRows = [];
  console.log(authorRows);

  // for (let author in authors) {
  //   authorRows.push(
  //     <div className="poetPage" key={author}>
  //       <div className="poetSection">
  //         <img src={Squiggles} alt="squiggly lines" className="squiggles" />
  //         <div className="poetName">{author}</div>
  //         {/* <PoetSubjects authorData={authors[author]} /> */}
  //       </div>
  //     </div>
  //   );
  // }
  return <div></div>;
  //   return authors !== undefined ? <div>{authorRows}</div> : <div></div>;
}

export default PoetPage;

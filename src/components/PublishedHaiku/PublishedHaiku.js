import React from "react";
import "./publishedHaiku.css";
import Heart from "./heart.svg";

function PublishedHaiku(props) {
  const haikus = props.haikuData;
  console.log(haikus)
  
  return haikus !== undefined ? (
    <div className="publishedHaiku">
    {haikus.map((res) => (
      <div>
      <div className="haiku">{res.text}</div>
      <div className="userInfo">
        <div className="imgWillGoHere"></div>
        <div className="userLinks">
          <a href="#" className="publishedUser">
            {haikus.author}
          </a>
          <br />
          <a href="#" className="userPosts">
            7 Haikus
          </a>
        </div>
        <img src={Heart} alt="ily"></img>
      </div>
    </div>
    ))}
 </div>
  ) : (
    <div></div>
  )
}

export default PublishedHaiku;

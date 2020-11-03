import React from "react";
import "./publishedHaiku.css";
import Heart from "./heart.svg";

function PublishedHaiku() {
  return (
    <div className="publishedHaiku">
      <div className="haiku"></div>
      <div className="userInfo">
        <div className="imgWillGoHere"></div>
        <div className="userLinks">
          <a href="#" className="publishedUser">
            Don Pinkus
          </a>
          <br />
          <a href="#" className="userPosts">
            7 Haikus
          </a>
        </div>
        <img src={Heart} alt="ily"></img>
      </div>
    </div>
  );
}

export default PublishedHaiku;

import React, {useState, useEffect} from "react";
import "./publishedHaiku.css";
import axios from "axios";
import Heart from "./heart.svg";

function PublishedHaiku() {
  let [haikus, haikusModifier] = useState({ saved: [] });

  useEffect(() => {
    axios
      .get("/api/haikus")
      .then((haikus) => {
        console.log(haikus)
        haikusModifier({ saved: haikus });
      })
      .catch((err) => console.log(err));
  }, []);

  let savedArr = !haikus.saved.data ? [] : haikus.saved.data;
  console.log(savedArr);

  return savedArr !== undefined ? (
    <div>
      {savedArr.map((res) => (
         <div className="publishedHaiku" key={res._id}>
        <div className="haiku">{res.text}</div>
      <div className="userInfo">
        <div className="imgWillGoHere"></div>
        <div className="userLinks">
          <a href="#" className="publishedUser">
            {res.author}
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
    <div className="container">
      <div>
        <h4>Nothing Yet!</h4>
      </div>
    </div>
  );
}

export default PublishedHaiku;

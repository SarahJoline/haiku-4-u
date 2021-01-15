import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./index.css";

function PublishedHaiku(props) {
  const haikus = props.haikuData;
  const fetchData = props.fetchData;
  const posts = props.postData;

  function deleteHaiku(haiku) {
    const id = haiku.target.id;

    axios.delete(`/api/delete/${id}`).then((res) => {
      fetchData();
    });
  }

  const authorPostCountText = (res) => {
    let userPosts;

    for (let post in posts) {
      if (post === res.author) {
        userPosts = posts[post];
      }
    }

    if (userPosts <= 1) {
      return userPosts + " Haiku";
    } else {
      return userPosts + " Haikus";
    }
  };

  return haikus ? (
    <div className="publishedHaiku">
      {haikus.map((haiku) => (
        <div className="idHere" key={haiku._id}>
          <pre className="haiku">{haiku.text}</pre>
          <div className="userInfo">
            <div className="userLinks">
              <div className="publishedUser">{haiku.author}</div>
              <br />
              <Link to={"/authors/" + haiku.authorID} className="userPosts">
                {authorPostCountText(haiku)}
              </Link>
            </div>
            <button
              className="deleteBtn"
              onClick={(event) => {
                deleteHaiku(event);
              }}
              id={haiku._id}
              data={haiku}
            >
              X
            </button>
          </div>
        </div>
      ))}
    </div>
  ) : (
    <div />
  );
}

export default PublishedHaiku;

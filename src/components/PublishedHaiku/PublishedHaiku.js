import React from "react";
import axios from "axios";
import "./publishedHaiku.css";

function PublishedHaiku(props) {
  const haikus = props.haikuData;
  const fetchData = props.fetchData;
  const posts = props.postData;
  var x;

  function deleteHaiku(haiku) {
    const id = haiku.target.id;
    axios.delete(`/api/delete/${id}`).then((res) => {
      fetchData();
    });
  }

  const authorPosts = (res) => {
    let userPosts;
    for (x in posts) {
      if (x === res.author) {
        userPosts = posts[x];
      }
    }
    if (userPosts <= 1) {
      return userPosts + " Haiku";
    } else {
      return userPosts + " Haikus";
    }
  };

  return haikus !== undefined ? (
    <div className="publishedHaiku">
      {haikus.map((res) => (
        <div className="idHere" key={res._id}>
          <pre className="haiku">{res.text}</pre>
          <div className="userInfo">
            {/* <div className="imgWillGoHere"></div> */}
            <div className="userLinks">
              <div className="publishedUser">{res.author}</div>
              <br />
              <a href={"/" + res.authorID} className="userPosts">
                {authorPosts(res)}
              </a>
            </div>
            <button
              className="deleteBtn"
              onClick={(event) => {
                deleteHaiku(event);
              }}
              id={res._id}
              data={res}
            >
              X
            </button>
          </div>
        </div>
      ))}
    </div>
  ) : (
    <div></div>
  );
}

export default PublishedHaiku;

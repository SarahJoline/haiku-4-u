import React from "react";
import axios from "axios";
import "./publishedHaiku.css";

function PublishedHaiku(props) {
  const haikus = props.haikuData;
  const fetchData = props.fetchData;

  function deleteHaiku(haiku) {
    const id = haiku.target.id;
    axios.delete(`/api/delete/${id}`).then((res) => {
      fetchData();
    });
  }

  return haikus !== undefined ? (
    <div className="publishedHaiku">
      {haikus.map((res) => (
        <div className="idHere" key={res._id}>
          <pre className="haiku">{res.text}</pre>
          <div className="userInfo">
            {/* <div className="imgWillGoHere"></div> */}
            <div className="userLinks">
              <a href="#" className="publishedUser">
                {res.author}
              </a>
              <br />
              {/* <a href="#" className="userPosts">
                7 Haikus
              </a> */}
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

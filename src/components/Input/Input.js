import React from "react"; 
import "./input.css";

function Input(props) {
  const haikus = props.haikuData;
  console.log('haikus', haikus)

//   let haikuArray = haikus.map((haikus, index) => {
// <h3 className="subject-name">{haikus.subject}</h3>
//   })


  return (
    <div className="input">
      <div className="form">
        <textarea
          rows="3"
          cols="2"
          placeholder="This box is for you,&#10;with your creative gift to,&#10;begin your haiku"
        ></textarea>
        <button>PUBLISH HAIKU</button>
      </div>
    </div>
  );
// });


// return (
//   <div className="wrap-container">
//     <div className="container">{haikuArray}</div>
//   </div>
// );
}

export default Input;

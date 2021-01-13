import React, { useState } from "react";
// useState - function
// component name must be uppercase
// must be in the function/ component body
// cannot call conditionally

const UseStateBasics = () => {
  // console.log(useState("hello world"));
  // const value = useState(1)[0];
  // const handler = useState(1)[1];
  // console.log(value, handler);
  const [text, setText] = useState("random title");
  // text is the variable, and setText is the variable used to control the state of the
  // variable when handleClick is called

  const handleClick = () => {
    if (text === "random title") {
      setText("hi hi hi");
    } else {
      setText("random title");
    }
  };

  return (
    <React.Fragment>
      <h1>{text}</h1>
      <button className="btn" onClick={handleClick}>
        Change Title
      </button>
    </React.Fragment>
  );
};

export default UseStateBasics;

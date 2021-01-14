import React, { useState, useEffect } from "react";
// by default runs after every re-render
// cleanup function
// second parameter
const UseEffectBasics = () => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    // useEffect reloads the page everytime the value is increased
    console.log("call useEffect");
    // and also updates the title of the webpage with the value as well if it is greater
    // than 0. also, notice the conditional is inside the useEffect hook because hooks
    // cannot be conditionally condition as aforementioned
    if (value > 1) {
      document.title = `New Messages(${value})`;
    } else {
      return;
    }
  });

  console.log("render component");
  return (
    <>
      <h1>{value}</h1>
      <button className="btn" onClick={() => setValue(value + 1)}>
        click me
      </button>
    </>
  );
};

export default UseEffectBasics;

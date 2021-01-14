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
  }, [value]);
  // the second, empty list argument passed into useEffect tells it to only render on the initial
  // render. after it will not, so the document title will not be updated. also called
  // dependency array. if we pass value, it will run when clicked indefinitely. if we pass
  // value <4, it will stop updating title after 4 click

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

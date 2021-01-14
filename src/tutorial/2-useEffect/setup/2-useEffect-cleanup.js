import React, { useState, useEffect } from "react";

// cleanup function
// second argument

const UseEffectCleanup = () => {
  const [size, setSize] = useState(window.innerWidth);

  const checkSize = () => {
    // func determines the new page width
    setSize(window.innerWidth);
  };
  // here we here are checking for when the window resizes, and call the checkSize
  // function to assign the value of setSize
  // useEffect is a function, that when executed, has a side-effect. i.e. when page is
  // resized, the side-effect is that the size value has the updated page width value.
  // it is good practice that when you set up an useEffect side effect, you set up a
  // cleanup function that removes additional eventlisteners for example. In this case,
  // we set dependency so that it is only executed on initial render.
  useEffect(() => {
    console.log("useEffect");
    window.addEventListener("resize", checkSize);
    // this below function removes the addition event listeners created
    // return () => {
    //   console.log("cleanup");
    //   window.removeEventListener("resize", checkSize);
    // };
  }, []);

  console.log("render");

  return (
    <>
      <h1>windows</h1>
      <h2>width: {size}</h2>
    </>
  );
};

export default UseEffectCleanup;

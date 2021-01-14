import React, { useState } from "react";
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
  const [text, setText] = useState("");
  const firstValue = text || "hello world";
  const secondValue = text && "hello world";

  return (
    <>
      {/* <h1>{firstValue}</h1>
      <h2>value: {secondValue}</h2> */}
      {/* {if(){console.log('hello world')}} */}
      {/* if we want to return some default value if none exists, use || (or operator) */}
      <h1>{text || "john doe"}</h1>
      {/* if text is false, return hello world */}
      {text && <h1>hello world</h1>}
    </>
  );
};

export default ShortCircuit;

import React, { useState } from "react";
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
  const [text, setText] = useState("");
  const [isError, setIsError] = useState(false);
  // const firstValue = text || "hello world";
  // const secondValue = text && "hello world";

  return (
    <>
      {/* <h1>{firstValue}</h1>
      <h2>value: {secondValue}</h2> */}
      {/* if we want to return some default value if none exists, use || (or operator) */}
      <h1>{text || "john doe"}</h1>
      <button className="btn" onClick={() => setIsError(!isError)}>
        toggle error
      </button>
      {/* if isError is false, return hello world */}
      {isError && <h1>Error...</h1>}
      {isError ? (
        <p>There is a error...</p>
      ) : (
        <div>
          <p>There is no error. Yay!</p>
        </div>
      )}
    </>
  );
};

export default ShortCircuit;

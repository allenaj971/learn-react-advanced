import React, { useState } from "react";

const UseStateCounter = () => {
  const [value, setValue] = useState(0);

  return (
    // <> is React.fragment rather than using div
    <>
      <section style={{ margin: "4rem 0" }}>
        <h2>Counter</h2>
        <h1>{value}</h1>
        {/* rather than defining a function outside, just using inline function to 
        set the value of value */}
        <button className="btn" onClick={() => setValue(value - 1)}>
          -
        </button>
        <button className="btn" onClick={() => setValue(0)}>
          reset
        </button>
        <button className="btn" onClick={() => setValue(value + 1)}>
          +
        </button>
      </section>
    </>
  );
};

export default UseStateCounter;

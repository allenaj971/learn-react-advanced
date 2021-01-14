import React, { useState } from "react";

const UseStateCounter = () => {
  const [value, setValue] = useState(0);

  const delayIncrease = () => {
    // using the setTimeout function to setValue to increase after 2 seconds/200 milliseconds
    setTimeout(() => {
      // setValue(value + 1);
      setValue((prevValue) => {
        // the setValue function stores the previous value and adds one so even if we click
        // the delayed counter 4 times, it will add 4 to the current value
        return prevValue + 1;
      });
    }, 2000);
  };

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
      <section style={{ margin: "4rem 0" }}>
        <h2>Delayed Counter</h2>
        <h1>{value}</h1>
        {/* rather than defining a function outside, just using inline function to 
        set the value of value */}
        <button className="btn" onClick={delayIncrease}>
          +
        </button>
      </section>
    </>
  );
};

export default UseStateCounter;

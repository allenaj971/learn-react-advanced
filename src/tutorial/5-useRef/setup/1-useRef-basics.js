import React, { useEffect, useRef } from "react";

// preserves value between renders
// DOES NOT trigger re-render
// target DOM nodes/elements

const UseRefBasics = () => {
  const refContainer = useRef(null);
  const divContainer = useRef(null);

  const handleSubmit = (e) => {
    // prevents page from reloading
    e.preventDefault();
    // prints out the current value of the container.
    console.log(refContainer.current.value);
    // the containers points to the value inside the div (in this case hello world)
    console.log(divContainer.current);
  };

  useEffect(() => {
    console.log(refContainer.current);
    refContainer.current.focus();
  });

  return (
    <>
      <form className="form" onSubmit={handleSubmit}>
        <div>
          {/* the useRef is getting the input data by referencing the container
          by ref={refContainer}. */}
          <input type="text" ref={refContainer} />
          <button type="submit">submit</button>
        </div>
      </form>
      <div ref={divContainer}>hello world</div>
    </>
  );
};

export default UseRefBasics;

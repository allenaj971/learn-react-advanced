import React, { useState } from "react";

const UseStateObject = () => {
  // here the initial object person
  const [person, setPerson] = useState({
    name: "peter",
    age: "24",
    message: "random message",
  });
  // console.log(person);

  const [name, setName] = useState("peter");
  const [age, setAge] = useState(24);
  const [message, setMessage] = useState("random message");

  const changeMessage = () => {
    // when setting the value here, it will change the object to a string and wipe out other values
    // setPerson("hello world");
    // to solve the issue we use spread thing to tell javascript to leave those values
    // and tell it to modify the required attribute.
    setPerson({ ...person, message: "hello World" });
    // you could seperately deconstruct and useState the values but up to you
    // setMessage("hello World");
  };

  return (
    <div>
      {/* to reference the person dictionary, use .'attribute' */}
      <h3>{name}</h3>
      <h3>{age}</h3>
      <h3>{message}</h3>
      <button className="btn" onClick={changeMessage}>
        change message
      </button>
    </div>
  );
};

export default UseStateObject;

import React, { useState } from "react";
// JS
// const input = document.getElementById('myText');
// const inputValue = input.value
// React
// value, onChange

const ControlledInputs = () => {
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  // here we are console logging hello world by preventing the default (which reloads
  // the page) when we click submit
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(firstName, email);
  };

  return (
    <>
      <article>
        <form className="form" onSubmit={handleSubmit}>
          <div className="form-control">
            <label htmlFor="firstName">Name : </label>
            {/* To connect an input, we provide a value parameter */}
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={firstName}
              // To edit the input field, we first use onChange event listener, pass in
              // parameter (name does not matter) then .target.value so that it can be
              // passed to the onSubmit event listener.
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div className="form-control">
            <label htmlFor="email">Email : </label>
            <input
              type="text"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <button type="submit">Add Person</button>
        </form>
      </article>
    </>
  );
};

export default ControlledInputs;

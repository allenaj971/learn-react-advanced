import React, { useState } from "react";
// JS
// const input = document.getElementById('myText');
// const inputValue = input.value
// React
// value, onChange

const ControlledInputs = () => {
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [people, setPeople] = useState([]);
  // here we are console logging hello world by preventing the default (which reloads
  // the page) when we click submit
  const handleSubmit = (e) => {
    // prevents default behaviour of reloading when clicking submit
    e.preventDefault();
    if (firstName && email) {
      const person = {
        id: new Date().getTime().toString(),
        firstName: firstName,
        email: email,
      };
      setPeople((people) => {
        return [...people, person];
      });
      setFirstName("");
      setEmail("");
    } else {
      console.log("error");
    }
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
        {people.map((person) => {
          const { id, firstName, email } = person;
          return (
            <div className="item" key={id}>
              <h4>{firstName}</h4>
              <h4>{email}</h4>
            </div>
          );
        })}
      </article>
    </>
  );
};

export default ControlledInputs;

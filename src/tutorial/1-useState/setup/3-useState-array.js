import React from "react";
// importing data from few levels up
import { data } from "../../../data";

const UseStateArray = () => {
  // can either import { useState } or use React.useState
  const [people, setPeople] = React.useState(data);
  // remove item function
  const removeItem = (id) => {
    // filter creates a new array that satisfies the test implemented
    // (in this case find matching id to remove it by setting newPeople to id and name
    // that doesn't match the id passed in)
    let newPeople = people.filter((person) => person.id !== id);
    setPeople(newPeople);
  };

  return (
    <div>
      {people.map((person) => {
        // deconstructs & maps each element id and name to person
        const { id, name } = person;
        return (
          // we need to pass in the id to ensure unique key prop when referenced
          <div key={id} className="item">
            <h4>{name}</h4>
            <button onClick={() => removeItem(id)}>remove</button>
          </div>
          // the .map loops over each element so that it displays all items in the list
        );
      })}
      <button className="btn" onClick={() => setPeople([])}>
        {/* we set up arrow func to avoid calling function while page loads, but only when
        we click the button. To clear all items, setPeople is passed an empty list */}
        clear items
      </button>
      <button className="btn" onClick={() => setPeople(data)}>
        get items back
      </button>
    </div>
  );
};

export default UseStateArray;

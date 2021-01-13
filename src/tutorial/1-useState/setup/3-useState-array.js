import React from "react";
// importing data from few levels up
import { data } from "../../../data";

const UseStateArray = () => {
  // can either import { useState } or use React.useState
  const [people, setPeople] = React.useState([]);
  return <h2>useState array example</h2>;
};

export default UseStateArray;

import React, { useState, useEffect } from "react";
const url = "https://api.github.com/users/sciencetechrocks";

const MultipleReturns = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [user, setUser] = useState("default user");
  // we're trying to access my github account
  useEffect(() => {
    // here we fetch the url, format the response as json, then the user is set as login
    // then we call setUser to update the username and set loading to false to remove the
    // loading page
    fetch(url)
      .then((resp) => {
        if (resp.status >= 200 && resp.status <= 299) {
          // if the response code satisfies the above, return the json
          return resp.json();
        } else {
          // else set loading to false and error to true
          setIsLoading(false);
          setIsError(true);
        }
      })
      .then((user) => {
        const { login } = user;
        setUser(login);
        setIsLoading(false);
      })
      // we catch error but only shows up in console
      .catch((error) => console.log(error));
  }, []);

  if (isLoading) {
    return (
      <div>
        <h2>Loading...</h2>
      </div>
    );
  }
  if (isError) {
    return (
      <div>
        <h1>Error...</h1>
      </div>
    );
  }
  return (
    <div>
      <h1>{user}</h1>
    </div>
  );
};

export default MultipleReturns;

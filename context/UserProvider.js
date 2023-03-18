import React, { useState, useEffect } from "react";
import userContext from "./userContext";
import axios from "axios";

export default function UserProvider(props) {
  const host = process.env.NEXT_PUBLIC_HOST;
  const [user, setUser] = useState(null);

  useEffect(() => {
    if (localStorage.getItem("auth-token")) {
      getUser();
    }
  }, []);

  // Get logged in user
  const getUser = () => {
    axios({
      method: "get",
      url: `${host}/user/getUser`,
      headers: {
        "auth-token": localStorage.getItem("auth-token"),
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        setUser(response.data);
      })
      .catch((error) => {
        alert(error.response.data.message);
      });
  };

  return (
    <userContext.Provider value={{ user }}>
      {props.children}
    </userContext.Provider>
  );
}
